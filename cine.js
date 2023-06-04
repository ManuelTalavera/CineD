document.addEventListener("DOMContentLoaded", function() {
    var selectGenero = document.querySelector("select[name='genero']");
  
    selectGenero.addEventListener("change", function() {
      var generoSeleccionado = selectGenero.value;
      var peliculas = document.querySelectorAll("#peli");
  
      peliculas.forEach(function(pelicula) {
        var generosPelicula = pelicula.getAttribute("data-genero").split(", ");
        if (generoSeleccionado === "todo" || generosPelicula.includes(generoSeleccionado)) {
          pelicula.style.display = "block";
        } else {
          pelicula.style.display = "none";
        }
      });
    });
  });