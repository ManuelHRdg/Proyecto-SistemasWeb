
//Datos del usuario
var bEditarImagenPerfil = document.getElementById("editarFotoPerfil").src = "img/3.jpg";


/*
    Cookie
    */
var sesion = getCookie("Sesion");

/*
    Poner Nombre en su campo
    */
var bEditarNombreUsuario = document.getElementById("nombreE").value = sesion;

/*
    Poner Email en su campo
    */
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

/*
    Poner Password en su campo
    */
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

$('#file').on('change', function() {
    var image = document.getElementById("editarFotoPerfil")
	image.src = URL.createObjectURL(event.target.files[0]);
});

$('#confirmarEliminarFoto').on('click', function() {
    var image = document.getElementById("editarFotoPerfil")
	image.src = "img/default-profile.png";
});

var bConfirmarEditar = document.getElementById("btnConfirmarCambios");
bConfirmarEditar.addEventListener('click',function(){
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

    });

$('#btnCancelarCambios').click(function() {
    window.location='Perfil.html';
  });



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