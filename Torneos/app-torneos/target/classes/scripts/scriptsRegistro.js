var bRegistro = document.getElementById("btnRegistro");

var alerta = document.getElementById("alerta");
alerta.style.display = 'none';
bRegistro.addEventListener('click',function(){
    var nombreRegistro = document.getElementById("nombreR").value;
    var emailRegistro = document.getElementById("emailR").value;
    var passwordRegistro = document.getElementById("passwordR").value;
    var passwordRegistro2 = document.getElementById("passwordR2").value;
    var sexoRegistro = document.getElementById("sexoR").value;


    if(nombreRegistro.length == 0 ||
        emailRegistro.length == 0 ||
        passwordRegistro.length == 0 ||
        passwordRegistro2.length == 0 ||
        sexoRegistro.length == 0){ 
            alerta.style.display = 'inline';
            document.getElementById("textoAlerta").innerHTML = "Todos los campos deben estar completos";
}else{
            if(passwordRegistro != passwordRegistro2){
                alerta.style.display = 'inline';
                document.getElementById("textoAlerta").innerHTML = "Los Passwords no coinciden";
            }else{
            axios.post("http://localhost:4567/registrarse",{
            nombre: nombreRegistro,
            email: emailRegistro,
            password: passwordRegistro,
            sexo: sexoRegistro
            })
            .then(function(response){
                setCookie("Sesion", response.data, 0)
                window.location='Perfil.html';
            })
            .catch(function(error) {
                console.log(error)
            }); 

        }
}
    });