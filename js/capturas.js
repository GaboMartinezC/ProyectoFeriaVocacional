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
    let opcion = juego + ".png";
    console.log(opcion);
}