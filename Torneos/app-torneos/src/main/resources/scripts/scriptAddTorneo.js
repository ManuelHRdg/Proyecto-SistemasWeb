//Confirmacion datos del torneo
var bConfirmarTorneo = document.getElementById("btnConfirmarCambios");
bConfirmarTorneo.addEventListener('click',function(){
    bNuevoNombreTorneo = document.getElementById("addTorneo").value;
    bNuevoFechaTorneo = document.getElementById("addFecha").value;
    bNuevoJuego = document.getElementById("juegoSeleccionado").value;
    bNuevoParticipacion = document.getElementById("addType").value;
    bNuevoMaxTeam = document.getElementById("maxTeam").value;
    bNuevoMaxParticipacion = document.getElementById("maxParticipantes").value;
    if(bNuevoNombreTorneo.length == 0 ||
        bNuevoFechaTorneo.length == 0 ||
        bNuevoMaxTeam.length == 0 ||
        bNuevoMaxParticipacion.length == 0 ){ 
            alerta.style.display = 'inline';
            document.getElementById("textoAlerta").innerHTML = "Todos los campos deben estar completos";

        }else{

        }
    );

//Cancelar cambios y situarse en el perfil
$('#btnCancelarCambios').click(function() {
    window.location='verTorneo.html';
  });
