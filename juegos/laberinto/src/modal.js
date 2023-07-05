const modal = document.getElementById("modalExito");
const modalFin = document.getElementById("modalDerrota");
const btnCerrar = document.getElementsByClassName("cerrar")[0];
//Eventos del Modal

btnCerrar.addEventListener("click", function() 
{
    Recargar();
});
window.addEventListener("click", function(event) 
{
    if (event.target === modal || event.target ===modalFin) 
    {
        Recargar();
    }
});
const Recargar = () =>
{
    modal.style.display = "none";
    this.window.location.reload();
}