var bEditarImagenPerfil = document.getElementById("editarFotoPerfil").src = "img/3.jpg";

var bEditarNombreUsuario = document.getElementById("nombreE").value = "EteSech";

var bEditarEmail = document.getElementById("emailE").value = "correo@yes.no";

var bEditarPassword = document.getElementById("passwordE").value = "password";

var bEditarPassword = document.getElementById("passwordE2").value = "password";

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
