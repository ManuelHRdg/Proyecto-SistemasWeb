//Imagen y nombre de perfil en la esquina
var bImagenPerfil = (document.getElementById("fotoPerfil").src = "img/3.jpg");

var bNombreUsuario = (document.getElementById("usuario").innerHTML = getCookie(
  "Sesion"
));

//Botones de navegacion del Sidebar
var bBotonHome = (document.getElementById("home").href = "principal.html");
var bBotonMiPerfil = (document.getElementById("miPerfil").href = "Perfil.html");
var bBotonMisTorneos = (document.getElementById("misTorneos").href =
  "misTorneos.html");
var bBotonTorneosLeague = (document.getElementById("torneosLeague").href =
  "LeagueOfLegends.html");
var bBotonTorneosFortnite = (document.getElementById("torneosFortnite").href =
  "Fortnite.html");
var bBotonTorneosWarzone = (document.getElementById("torneosWarzone").href =
  "Warzone.html");
var bBotonCerrarSesion = document.getElementById("cerrarSesion");

//Cierra la sesion y regresa al Index
bBotonCerrarSesion.addEventListener("click", function () {
  deleteCookie("Sesion");
  location.href = "index.html";
});
