
var torneos=new Array();
var torneo=new Array();

axios.post("https://torneos-equipo6.herokuapp.com/torneos", {
    juego: getCookie("Sesion")
})
.then(function(response){
    var respuesta=response.data;
    crearCards(respuesta)
})
.catch(function(error){
    console.log(error);
});