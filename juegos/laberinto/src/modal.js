const modal = document.getElementById("modalExito");
const btnCerrar = document.getElementsByClassName("cerrar")[0];
//Eventos del Modal
btnCerrar.addEventListener("click", function() 
{
    modal.style.display = "none";
    this.window.location.reload();
});
window.addEventListener("click", function(event) 
{
    if (event.target === modal) 
    {
        modal.style.display = "none";
        this.window.location.reload();
    }
});
