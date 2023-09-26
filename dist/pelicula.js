document.addEventListener("DOMContentLoaded", () =>{
    const detallePelicula = document.querySelector("#detalle-pelicula");

    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams)
    const idPelicula = urlParams.get("id");
    console.log(idPelicula)

    const datosPeliculas = JSON.parse(localStorage.getItem("peliculas"));

    const peliculaSeleccionada = datosPeliculas.find((pelicula) => pelicula.name === idPelicula);
    console.log(peliculaSeleccionada)

    if (peliculaSeleccionada) {
        const backgroundPelicula = document.querySelector("#fondo-pelicula");
        backgroundPelicula.src = `${peliculaSeleccionada.img}`;
        const infoContainer = document.querySelector("#info-pelicula");
        infoContainer.innerHTML = `
        <h1 class="text-6xl font-semibold pb-2 text-center">${peliculaSeleccionada.name}</h1>
        <p class="text-center pb-3"><span class="font-semibold">${peliculaSeleccionada.actors}.</span>  ${peliculaSeleccionada.publish_date}</p>
        <a href="${peliculaSeleccionada.trailer}" target="_blank" rel="noopener" class="flex flex-row items-center border bg-transparent uppercase
                 text-center mx-auto px-3 py-2 rounded-full font-semibold hover:bg-blue-900 hover:border-blue-900 transition-all" type="button">                 
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                      </svg>
                        Ver trailer                 
        </a>
        `;

    }
})