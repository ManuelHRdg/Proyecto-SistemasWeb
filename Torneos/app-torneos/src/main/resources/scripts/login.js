var bLogin = document.getElementById("btnLogin");


//Listener para el boton de login en el modal
bLogin.addEventListener('click', function() {
    var loginUsuario = document.getElementById("inputEmail").value;
    var loginPassword = document.getElementById("inputPassword").value;

    //Llamada a axios post para hacer login
    axios.post("http://localhost:4567/login", {
        email: loginUsuario,
        password: loginPassword
    })
    .then(function(response){
        console.log(response.data);
        //Si las credenciales coiunciden, crea un nuevo cookie con el nombre de usuario
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