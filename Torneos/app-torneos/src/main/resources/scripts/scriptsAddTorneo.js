//Confirmacion datos del torneo
var bConfirmarTorneo = document.getElementById("btnConfirmarCambios");
bConfirmarTorneo.addEventListener('click',function(){
    var bNuevoNombreTorneo = document.getElementById("agregarTorneo").value;
    var bNuevoFechaTorneo = document.getElementById("addFecha").value;
    var bNuevoJuego = document.getElementById("juegoSeleccionado").value;
    var bNuevoParticipacion = document.getElementById("addType").value;
    var bNuevoMaxTeam = document.getElementById("descripcionTorneo").value;
    var bNuevoMaxParticipacion = document.getElementById("maxParticipantes").value;

    if(bNuevoNombreTorneo.length == 0 ||
        bNuevoJuego.length == 0 ||
        bNuevoMaxTeam.length == 0 ||
        bNuevoMaxParticipacion.length == 0 ){ 
            alerta.style.display = 'inline';
            document.getElementById("textoAlerta").innerHTML = "Todos los campos deben estar completos";

        }else{
            axios.post("http://localhost:4567/crearTorneo", {
                juego: bNuevoJuego,
                nombre: bNuevoNombreTorneo,
                descripcion: bNuevoMaxTeam,
                urlImagen: "img/1.jpg",
                capacidad: bNuevoMaxParticipacion
            })
            .then(function(response){
                window.location='verTorneo.html';
            })
            .catch(function(error){
                console.log(error);
            });
        }
});

//Cancelar cambios y situarse en el perfil
$('#btnCancelarCambios').click(function() {
    window.location='verTorneo.html';
  });
