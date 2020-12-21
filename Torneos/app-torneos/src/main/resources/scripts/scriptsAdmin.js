//Imagen y nombre de perfil en la esquina
var bImagenPerfil = (document.getElementById("fotoPerfil").src = "img/3.jpg");

var bNombreUsuario = (document.getElementById("admin").innerHTML = "Admin");

//getCookie("Sesion");

//Botones de navegacion del Sidebar
var bBotonHome = (document.getElementById("home").href = "admin.html");
var bBotonAddTorneo = (document.getElementById("addTorneo").href =
  "addTorneo.html");
var bBotonVerTorneo = (document.getElementById("verTorneos").href =
  "verTorneo.html");
var bBotonCerrarSesion = document.getElementById("cerrarSesion");

bBotonCerrarSesion.addEventListener("click", function () {
  deleteCookie("Sesion");
  location.href = "index.html";
});
