var bRegistro = document.getElementById("btnRegistro");
bRegistro.addEventListener('click',function(){
    axios.post("http://localhost:4567/registrarse",{
    nombre: document.getElementById("nombreR").value,
    email: document.getElementById("emailR").value,
    password: document.getElementById("passwordR").value,
    sexo: document.getElementById("sexoR").value
    })
    .then(function(response){

    })
    .catch(function(error) {
        console.log(error)
    });  

    });