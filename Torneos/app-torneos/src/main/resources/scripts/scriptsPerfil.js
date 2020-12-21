var bEditarImagenPerfil = document.getElementById("editarFotoPerfil").src = "img/3.jpg";

var sesion = getCookie("Sesion");

var bNombreUsuario = document.getElementById("nombreP").innerHTML = sesion;

var bEmail = document.getElementById("emailP");

    axios.post("https://torneos-equipo6.herokuapp.com/getCorreo", {
        nombre: sesion
    })
    .then(function(response){
        console.log(response.data);
        bEmail.innerHTML = response.data;
    })
    .catch(function(error){
        console.log(error)
    });

$('#editarPerfil').click(function() {
    window.location='editarPerfil.html';
  });