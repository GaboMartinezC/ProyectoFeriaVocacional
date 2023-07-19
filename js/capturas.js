const CambiarCaptura = (juego) => {
    let opcion = "assets/img/" + juego + ".png";
    let opcionJuego = "juegos/" + juego + "/index.html";
    document.querySelector("a").setAttribute("href", opcionJuego);
    document.getElementById("imagenFondo").setAttribute("src",opcion);
}