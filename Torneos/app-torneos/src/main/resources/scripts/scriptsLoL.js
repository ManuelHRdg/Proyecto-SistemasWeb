arr = [{
    "Name": "Peterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    "Job": "Programmer"
  },
  {
    "Name": "John",
    "Job": "Programmer"
  },
  {
    "Name": "Kevin",
    "Job": "Scientist"
  },
];

axios.post("http://localhost:4567/torneos", {
    juego: "lol"
})
.then(function(response){
    var respons = response;
    var lista = response.data;
    console.log(respons.message);
    console.log(lista);
    var emailP = document.getElementById("emailP");
    emailP.innerHTML = response.data[1];
})
.catch(function(error){
    console.log(error);
});

$.each(arr, function(i) {
  var templateString = '<div class="card">    <img class="card-img-top" src="img/1.jpg" alt="Card image cap">      <div class="card-body">  <h5>' + arr[i].Name + '</h5> </p></div> </div>';
  $('#test').append(templateString);
})