let variableControl = false;
const lstOpciones = document.getElementsByClassName('opcionesMenuJuegos');
for (let i = 0; i < lstOpciones.length; i++){
    lstOpciones[i].addEventListener('onmouseleave', function ImagenDefecto(){
        if (!variableControl)
        {
            console.log("sexooo")
        }
    });
} 
const CambiarCaptura = (juego) => {
    let opcion = "assets/img/" + juego + ".png";
    let opcionJuego = "juegos/" + juego + "/index.html";
    document.querySelector("a").setAttribute("href", opcionJuego);
    document.getElementById("imagenFondo").setAttribute("src",opcion);
}