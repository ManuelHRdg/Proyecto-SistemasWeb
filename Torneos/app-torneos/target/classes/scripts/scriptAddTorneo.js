//Confirmacion datos del torneo
var bConfirmarTorneo = document.getElementById("btnConfirmarCambios");
bConfirmarTorneo.addEventListener('click',function(){
    bNuevoNombreTorneo = document.getElementById("addTorneo").value;
    bNuevoFechaTorneo = document.getElementById("addFecha").value;
    bNuevoJuego = document.getElementById("addJuego").value;
    bNuevoParticipacion = document.getElementById("addType").value;
    bNuevoMaxTeam = document.getElementById("maxTeam").value;
    bNuevoMaxParticipacion = document.getElementById("maxParticipantes").value;
    if(bNuevoNombreTorneo.length == 0 ||
        bNuevoFechaTorneo.length == 0 ||
        bNuevoMaxTeam.length == 0 ||
        bNuevoMaxParticipacion.length == 0 ){ 
            alerta.style.display = 'inline';
            document.getElementById("textoAlerta").innerHTML = "Todos los campos deben estar completos";

    );

//Cancelar cambios y situarse en el perfil
$('#btnCancelarCambios').click(function() {
    window.location='Perfil.html';
  });


  //Cookies
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