document.addEventListener("DOMContentLoaded", function(event) {
    //La primera dimensión son los x y la segunda las y
    const posicionesEnemigosX = [950, 0];
    const posicionesEnemigosY = [250, 350, 400];
    const personaje = document.getElementById("personaje");
    const covao = document.getElementById("covao");
    const listaObstaculos = Array.from(document.getElementsByClassName("obstaculo"));

    let posicion = { x: 50, y: 50 };

    function handleKeyPress(event) {
        let newX = posicion.x;
        let newY = posicion.y;

        switch (event.keyCode) {
            case 37: // Left arrow
                newX -= 50;
                break;
            case 38: // Up arrow
                newY -= 50;
                break;
            case 39: // Right arrow
                newX += 50;
                break;
            case 40: // Down arrow
                newY += 50;
                break;
            default:
                return;
        }

        if (MovimientoValido(newX, newY)) {
            posicion.x = newX;
            posicion.y = newY;
            personaje.style.left = newX + "px";
            personaje.style.top = newY + "px";
            checkWin();
            enemigoEncontrado();
        }
    }

    function MovimientoValido(x, y) {
        if (x < 0 || x > 999 || y < 0 || y > 550) {
            return false; // Movimiento fuera del límite del juego
        }

        for (let obstaculo of listaObstaculos) {
            if (x === obstaculo.offsetLeft && y === obstaculo.offsetTop) {
                return false; // Movimiento en un obstáculo
            }
        }

        return true; // Movimiento válido
    }

    function checkWin() 
    {
        if (posicion.x === covao.offsetLeft && posicion.y === covao.offsetTop) {
            modal.style.display = "block";
            window.removeEventListener("keydown", handleKeyPress);
        }
    }
    function enemigoEncontrado()
    {
        for (let i = 0; i<2; i++)
        {
            if (posicion.x === posicionesEnemigosX[i])
            {
                for (let j = 0; j<3; j++)
                {
                    if (posicion.y === posicionesEnemigosY[j])
                    {
                        modal.style.display = "block";
                    }
                }
            }
        }
        if (posicion.x === 950 && posicion.y === 250)
        {
            modal.style.display = "block";
            window.removeEventListener("keydown", handleKeyPress);
        }
        console.log(posicion.x, " ", posicion.y);
    }
    window.addEventListener("keydown", handleKeyPress);
});
