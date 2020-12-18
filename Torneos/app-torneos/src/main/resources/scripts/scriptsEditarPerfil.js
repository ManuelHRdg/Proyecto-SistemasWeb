
//Datos del usuario
var bEditarImagenPerfil = document.getElementById("editarFotoPerfil").src = "img/3.jpg";


//Cookie
var sesion = getCookie("Sesion");

    //Poner Nombre en su campo
var bEditarNombreUsuario = document.getElementById("nombreE").value = sesion;


    //Poner Email en su campo
var bEditarEmail = document.getElementById("emailE");

    axios.post("http://localhost:4567/getCorreo", {
        nombre: sesion
    })
    .then(function(response){
        console.log(response.data);
        bEditarEmail.value = response.data;
    })
    .catch(function(error){
        console.log(error)
    });

    //Poner Password en su campo
var bEditarPassword = document.getElementById("passwordE")

var bEditarPassword2 = document.getElementById("passwordE2")

    axios.post("http://localhost:4567/getPassword", {
        nombre: sesion
    })
    .then(function(response){
        console.log(response.data);
        bEditarPassword.value = response.data;
        bEditarPassword2.value = response.data;
    })
    .catch(function(error){
        console.log(error)
    });


//Eventos de botones
$('#btnCambiarFoto').on('click', function() {
    $('#file').trigger('click');
});

//Accion para cambiar la imagen en el panel de edicion
$('#file').on('change', function() {
    var image = document.getElementById("editarFotoPerfil")
    image.src = URL.createObjectURL(event.target.files[0]);
});

//Eliminar foto de perfil
$('#confirmarEliminarFoto').on('click', function() {
    var image = document.getElementById("editarFotoPerfil")
	image.src = "img/default-profile.png";
});

//Eliminar Perfil y volver al index
$('#confirmarEliminarPerfil').on('click', function() {
    axios.post("http://localhost:4567/eliminarPerfil", {
        nombre: sesion
    })
    .then(function(response){
        deleteCookie("Sesion");
        window.location='index.html';
    })
    .catch(function(error){
        console.log(error);
    });
});

//Confirmacion para editar los datos
var bConfirmarEditar = document.getElementById("btnConfirmarCambios");
bConfirmarEditar.addEventListener('click',function(){
    bEditarNombreUsuario = document.getElementById("nombreE").value;
    bEditarEmail = document.getElementById("emailE").value;
    bEditarPassword = document.getElementById("passwordE").value;
    bEditarPassword2 = document.getElementById("passwordE2").value;
    if(bEditarNombreUsuario.length == 0 ||
        bEditarEmail.length == 0 ||
        bEditarPassword.length == 0 ||
        bEditarPassword2.length == 0 ){ 
            alerta.style.display = 'inline';
            document.getElementById("textoAlerta").innerHTML = "Todos los campos deben estar completos";
}else{
            if(bEditarPassword != bEditarPassword2){
                alerta.style.display = 'inline';
                document.getElementById("textoAlerta").innerHTML = "Los Passwords no coinciden";
            }else{
    axios.post("http://localhost:4567/editar",{
    nombre: document.getElementById("nombreE").value,
    email: document.getElementById("emailE").value,
    password: document.getElementById("passwordE").value,
    })
    .then(function(response){

    })
    .catch(function(error) {
        console.log(error)
    }); 
            }
        } 

    });


//Cancelar cambios y situarse en el perfil
$('#btnCancelarCambios').click(function() {
    window.location='Perfil.html';
  });