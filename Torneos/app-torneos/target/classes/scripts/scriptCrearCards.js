//Funcion para crear cartas dinamicamente
function crearCards(respuesta) {
  var i = 0;
  var count = 0;
  var escribiendo = 0;
  var actual = "";
  var urlImagen = "";
  var nombreTorneo = "";
  var descripcion = "";
  var capacidad = "";
  var j = 0;
  while (respuesta[j] != null) {
    if (respuesta[j] != ")") {
      j++;
    } else {
      count++;
      j++;
    }
  }
  count = count / 4;
  j = 0;
  while (i < count) {
    while (respuesta[j] != ")") {
      if (escribiendo != 0) {
        actual = actual + respuesta[j];
      }
      if (respuesta[j] == "(") {
        escribiendo = 1;
      }
      j++;
    }
    j++;
    urlImagen = actual;
    escribiendo = 0;
    actual = "";
    while (respuesta[j] != ")") {
      if (escribiendo != 0) {
        actual = actual + respuesta[j];
      }
      if (respuesta[j] == "(") {
        escribiendo = 1;
      }
      j++;
    }
    j++;
    nombreTorneo = actual;
    escribiendo = 0;
    actual = "";
    while (respuesta[j] != ")") {
      if (escribiendo != 0) {
        actual = actual + respuesta[j];
      }
      if (respuesta[j] == "(") {
        escribiendo = 1;
      }
      j++;
    }
    j++;
    descripcion = actual;
    escribiendo = 0;
    actual = "";
    while (respuesta[j] != ")") {
      if (escribiendo != 0) {
        actual = actual + respuesta[j];
      }
      if (respuesta[j] == "(") {
        escribiendo = 1;
      }
      j++;
    }
    j++;
    capacidad = actual;
    torneo = [urlImagen, nombreTorneo, descripcion, capacidad];
    escribiendo = 0;
    actual = "";
    torneos.push(torneo);
    i++;
  }
  var i = 0;
  while (i < count) {
    //Crea una carta por cada torneo
    var templateString =
      '<div class="card">    <img class="card-img-top" src="' +
      torneos[i][0] +
      '" alt="Card image cap">' +
      '<div class="card-body">  <h5>' +
      torneos[i][1] +
      '</h5><p class="card-text">' +
      "<div> " +
      torneos[i][2] +
      "</div>" +
      "<div>Jugadores maximos: " +
      torneos[i][3] +
      '</div> </p> <a href="registro.html" class="btn btn-primary">Participar!</a> </div> </div>';
    $("#test").append(templateString);

    i++;
  }
  if (count == 0) {
    //Crea la carta por defecto de torneos no encontrados
    var templateString =
      '<div class="card">    <img class="card-img-top" src="img/NoTorneo.jpg" alt="Card image cap">' +
      '<div class="card-body">  <h5>No hay Torneo disponible</h5></div> </div>';
    $("#test").append(templateString);
  }
}
