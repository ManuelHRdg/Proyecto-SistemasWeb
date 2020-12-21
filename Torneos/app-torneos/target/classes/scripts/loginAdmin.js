var bLogin = document.getElementById("btnLoginAdmin");

//Listener para el boton de login de Administrador en el modal
bLogin.addEventListener("click", function () {
    var btnLoginAdmin = document.getElementById("inputIdAdmin").value;
    var loginPasswordAdmin = document.getElementById("inputPasswordAdmin").value;
  
    //Llamada a axios post para hacer login
    axios
      .post("https://torneos-equipo6.herokuapp.com/loginAdmin", {
        id: btnLoginAdmin,
        password: loginPasswordAdmin,
      })
      .then(function (response) {
        console.log(response.data);
        //Si las credenciales coiunciden, crea un nuevo cookie con el ID del admin y redirige a su portal
        if (response.data != "0") {
          setCookie("Sesion", response.data, 0);
          location.href = "admin.html";
        } else {
          setCookie("Sesion", "", 0);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });