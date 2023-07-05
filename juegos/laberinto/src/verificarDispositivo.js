// Verificar si el usuario está en un dispositivo móvil
function isMobileDevice() 
{
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// Verificar si el usuario está en una tableta
function isTablet() 
{
    return /iPad|Android/i.test(navigator.userAgent) && !window.MSStream;
}  
// Verificar si el usuario está en un dispositivo de escritorio
function isDesktop() 
{
    return !isMobileDevice() && !isTablet();
}
if (isDesktop())
{
    const juego = Array.from(document.getElementsByClassName("juego"))[0];
    const modal = getElementById("modalCelular");
    juego.style.display = "none";
    modal.style.display = "block"
}