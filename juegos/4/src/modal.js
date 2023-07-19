const modal = document.getElementById("modalExito");
const modalFin = document.getElementById("modalDerrota");
const modalNoDesktop = document.getElementById("modalCelular");
const btnCerrar = document.getElementsByClassName("cerrar")[0];
//Eventos del Modal

btnCerrar.addEventListener("click", function() 
{
    Recargar();
});
window.addEventListener("click", function(event) 
{
    if (event.target === modal || event.target === modalFin) 
    {
        Recargar();
    }
    if (event.target === modalNoDesktop)
    {
        modalNoDesktop.style.display = "none"
    }
});
const Recargar = () =>
{
    modal.style.display = "none";
    this.window.location.reload();
}