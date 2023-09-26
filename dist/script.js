const movieContainer = document.querySelector("#movies-container");
fetch("../dist/western_movies.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("peliculas", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const datosPeliculas = JSON.parse(localStorage.getItem("peliculas"));
  console.log(datosPeliculas);
  if (datosPeliculas) {
    datosPeliculas.forEach((pelicula)=> {
      const peliculaCard = document.createElement("div");
      peliculaCard.classList.add(`cursor-pointer` ,'relative', `flex`, `flex-wrap`, `w-full` ,`md:w-4/12`, `h-48`, `bg-gradient-to-tr`, `from-slate-600`, `to-slate-400`, `rounded-md`, `hover:ring-2`, `ring-blue-600`, `shadow-xl`, `transition-all`, `duration-200`);

      peliculaCard.innerHTML += `<img src=${pelicula.img} alt="" class="absolute w-full h-full object-cover bg-center rounded-md mix-blend-overlay">`;
      peliculaCard.innerHTML += `<div class="flex flex-wrap flex-col absolute bottom-0 left-0 text-white pl-3 leading-4">
               <h3 class="font-bold text-xl ">${pelicula.name}</h3>
               <p class="pb-2 "><span class="font-semibold">${pelicula.actors}</span>, ${pelicula.publish_date}</p>
             </div>`;
      peliculaCard.addEventListener("click", ()=> {
        mostrarDetallesPelicula(pelicula);
      })
      movieContainer.appendChild(peliculaCard)
    })

  }
});

function mostrarDetallesPelicula(pelicula) {
  window.location.href = `pelicula.html?id=${pelicula.name}`
}

// function movies(){
//     fetch("./western_movies.json")
//         .then(r => r.json())
//         .then(peliculas => {
//             peliculas.forEach(pelicula => {
//                const peliculaCard = document.createElement("div");
//                peliculaCard.classList.add('relative', `flex`, `flex-wrap`, `w-full` ,`md:w-4/12`, `h-48`, `bg-gradient-to-tr`, `from-slate-600`, `to-slate-400`, `rounded-md`, `hover:ring-2`, `ring-blue-600`, `shadow-xl`, `transition-all`, `duration-200`);

//                peliculaCard.innerHTML += `<img src=${pelicula.img} alt="" class="absolute w-full h-full object-cover bg-center rounded-md mix-blend-overlay">`;
//                peliculaCard.innerHTML += `<div class="flex flex-wrap flex-col absolute bottom-0 left-0 text-white pl-3 leading-4">
//                <h3 class="font-bold text-xl ">${pelicula.name}</h3>
//                <p class="pb-2 "><span class="font-semibold">${pelicula.actors}</span>, ${pelicula.publish_date}</p>
//              </div>`;
//                movieContainer.appendChild(peliculaCard)

//             });
//         })

// }
// movies()

