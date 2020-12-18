var botonIngreso = document.getElementById("botonIngreso");
var botonRegistro = document.getElementById("botonRegistro");

var sesionCookie = getCookie("Sesion");

if(sesionCookie != ""){
    botonIngreso.style.display = "none";
    botonRegistro.style.display = "none";
}