var torneos=new Array();
var torneo=new Array();

axios.post("http://localhost:4567/torneos", {
    juego: "Fortnite"
})
.then(function(response){
    var respuesta=response.data;
    crearCards(respuesta);
})
.catch(function(error){
    console.log(error);
});