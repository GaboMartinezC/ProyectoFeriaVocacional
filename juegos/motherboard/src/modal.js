const modal = document.getElementById("modalExito");
const btnCerrar = document.getElementsByClassName("close")[0];
//Eventos del Modal

btnCerrar.addEventListener("click", function() 
{
    Recargar();
});
window.addEventListener("click", function(event) 
{
    if (event.target === modal) 
    {
        Recargar();
    }
});
const Recargar = () =>
{
    modal.style.display = "none";
    this.window.location.reload();
}