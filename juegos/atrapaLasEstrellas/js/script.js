const pj = document.getElementById("personaje");
let seconds; 
let estrellasTotales = 0;
document.addEventListener("DOMContentLoaded", function(event){
    let posicion = { x: 430, y: 300};
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
        if (x < 0 || x > 1130 ) 
            return false;
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
const listaEstrellas = Array.from(document.querySelector('.estrella'));
let estrellaBajando = 0;

const ConvertirTiempo = (num) => {
   const minutos =  Math.floor(num / 60);
   let segundos = num % 60; 
   if(segundos<10)
       segundos = `0${segundos}`
   crono.innerHTML = `${minutos}:${segundos}`
}

const NumeroRandom = () => {
    let numero = Math.floor(Math.random() * 1250)
    return numero
}

const PosicionEstrellas = () => {
    for(let estrella in listaEstrellas)
        estrella.style.left = `${NumeroRandom()}px`
}
const EstrellaNueva = () => {
    listaEstrellas[estrellaBajando].style.display = 'block';
    if(estrellaBajando === 9)
        estrellaBajando = 0;
    else
        estrellaBajando++;
}
const ActuTiempo = () => {
    if(tiempo<=0)
        JuegoPerdido();
    else
        tiempo--;
    ConvertirTiempo(tiempo);
}
const DetectarColision = () => {
    
    ActuContador();
}
const ActuContador = () => {
    const contador = document.getElementById('contadorEstrellas');
    contador.innerHTML = estrellasTotales;
}
const IniciarJuego = () => {
    const ePJ = document.getElementById('iniciar');
    ePJ.style.display = "none";
    setInterval(ActuTiempo,1000);
    PosicionEstrellas();
    EstrellaNueva();
    setInterval(EstrellaNueva,5000);
    setInterval(PosicionEstrellas,40000);
    setInterval(DetectarColision,100)
}