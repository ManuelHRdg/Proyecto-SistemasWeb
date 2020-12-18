
//Imagen y nombre de perfil en la esquina
var bImagenPerfil = document.getElementById("fotoPerfil").src = "img/3.jpg";

var bNombreUsuario = document.getElementById("usuario").innerHTML = getCookie("Sesion");


//Botones de navegacion del Sidebar
var bBotonHome = document.getElementById("home").href = "principal.html";
var bBotonMiPerfil = document.getElementById("miPerfil").href = "Perfil.html";
var bBotonMisTorneos = document.getElementById("misTorneos").href = "Perfil.html";
var bBotonTorneosLeague = document.getElementById("torneosLeague").href = "LeagueOfLegends.html";
var bBotonTorneosFortnite = document.getElementById("torneosFortnite").href = "index.html";
var bBotonTorneosWarzone = document.getElementById("torneosWarzone").href = "index.html";
var bBotonCerrarSesion = document.getElementById("cerrarSesion");



bBotonCerrarSesion.addEventListener('click', function(){
    deleteCookie("Sesion");
    location.href = "index.html";
})

function deleteCookie(correo){
    valor="";
    expiracion="";
    var d = new Date();
    d.setTime(d.getTime()+expiracion*24*60*60*1000);
    var expira = "expieres="+d.toUTCString();
    document.cookie = correo+ "=" + valor +";" + expira +";path=/";
}

function setCookie(correo, valor, expiracion){
    var d = new Date();
    d.setTime(d.getTime()+expiracion*24*60*60*1000);
    var expira = "expieres="+d.toUTCString();
    document.cookie = correo+ "=" + valor +";" + expira +";path=/";
}

function getCookie(correo){
    var nom= correo +"=";
    var array = document.cookie.split(";");
    for(var i=0; i<array.length; i++){
        var c = array[i];
        while (c.charAt(0)==" "){
            c= c.substring(1);
        }
        if(c.indexOf(correo)==0){
            return c.substring(correo.length + 1, c.length);
        }
    }
    return  "";
}