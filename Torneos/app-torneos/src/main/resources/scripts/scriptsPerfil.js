var bEditarImagenPerfil = document.getElementById("editarFotoPerfil").src = "img/3.jpg";

var sesion = getCookie("Sesion");

var bNombreUsuario = document.getElementById("nombreP").innerHTML = sesion;

var bEmail = document.getElementById("emailP");

    axios.post("http://localhost:4567/getCorreo", {
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