const modalExito = document.getElementById("modalExito");
const modalDerrota = document.getElementById("modalDerrota");
const btnCerrar = document.getElementsByClassName("close")[0];
const btnCerrarII = document.getElementsByClassName("close")[1];
//Eventos del Modal

btnCerrar.addEventListener("click", function() 
{
    Recargar();
});
btnCerrarII.addEventListener("click", function() 
{
    Recargar();
});
window.addEventListener("click", function(event) 
{
    if (event.target === modalExito || event.target === modalDerrota) 
    {
        Recargar();
    }
});
const Recargar = () =>
{
    modalExito.style.display = "none";
    modalDerrota.style.display = "none";
    this.window.location.reload();
}