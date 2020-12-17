var bLogin = document.getElementById("btnLogin");

bLogin.addEventListener('click', function() {
    var loginUsuario = document.getElementById("inputEmail").value;
    var loginPassword = document.getElementById("inputPassword").value;

    axios.post("http://localhost:4567/login", {
        email: loginUsuario,
        password: loginPassword
    })
    .then(function(response){
        console.log(response.data);
        if(response.data!="0"){
            setCookie("Sesion", response.data, 0)   
            location.href = "principal.html";
        }
        else{
            setCookie("Sesion", "", 0)
        }
    })
    .catch(function(error){
        console.log(error)
    });
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