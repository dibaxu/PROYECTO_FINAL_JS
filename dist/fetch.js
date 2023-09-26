function movies(){
    fetch("western_movies.json")
        .then(r => r.json())
        .then(peliculas => {
            peliculas.forEach(pelicula => {
                console.log(pelicula)
            });
        })

}

movies()