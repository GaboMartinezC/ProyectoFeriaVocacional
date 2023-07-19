const pj= document.getElementById("personaje");
let seconds;
document.addEventListener("DOMContentLoaded", function(event){
    const pisos = Array.from(document.getElementsByClassName("piso"));
    let posicion = { x: 430, y: 200};
    function handleKeyPress(event) {
        let newX = posicion.x;
        let newY = posicion.y;
        switch (event.keyCode) {
            case 37:
            case 65: // flecha izquierda o 'A'
                newX -= 80;
                if(juegoEmpezado === false)
                {
                    juegoEmpezado = true;
                    IniciarJuego();
                }
                break;
            case 39: 
            case 68:// flecha derecha o 'd'
                newX += 80;
                if(juegoEmpezado === false)
                {
                    juegoEmpezado = true;
                    IniciarJuego();
                }
                break;
            default:
                return;
        }
        if (MovimientoValido(newX, newY)) {
            posicion.x = newX;
            posicion.y = newY;
            personaje.style.left = newX + "px";
            personaje.style.top = newY + "px";
        }
    }
    function MovimientoValido(x, y) {
        if (x < 0 || x > 1300 || y < 0 || y > 500) {
            return false;
        }
        for (let piso of pisos) {
            if (x === piso.offsetLeft && y === piso.offsetTop) {
                return false;
            }
        }
        return true;
    }   
    window.addEventListener("keydown", handleKeyPress);
});
const JuegoPerdido = () =>{
    alert('Perdio');
}
let tiempo=75;
let juegoEmpezado = false;
let tiempoSetInterval;
let crono = document.getElementById('cronometro');
const ConvertirTiempo = (num) => {
   const minutos =  Math.floor(num / 60);
   let segundos = num % 60;
   if(segundos<10)
       segundos = `0${segundos}`
   crono.innerHTML = `${minutos}:${segundos}`
}
const ActuTiempo = () => {
    if(tiempo<=0){
        JuegoPerdido();
    }
    else
    {
        tiempo--;
    }
    ConvertirTiempo(tiempo);
}
const IniciarJuego = () => {
    const ePJ = document.getElementById('iniciar');
    ePJ.style.display = "none";
    setInterval(ActuTiempo,1000);
}