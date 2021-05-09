
//ESCONDER PANTALLA 0, APARACE PANTALLA 1

document.addEventListener('keypress', function (event) {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.visibility = "visible";
    //document.getElementById("idPantalla1").style.display = "none";
    //document.getElementById("idPantalla2").style.visibility = "visible";
  
  });

// CREANDO LOS OBJETOS

class Tablero {
  constructor (zona) {
    this.zona = zona;
    this.size = 9
  }

  dibujar () {
    //mostrar el tablero
  }

  asignar () {
    // asignar ubicacion zona
  }

  mostrarHundido () {

  }

  mostrarAgua () {

  }

  mostrarFuego () {

  }

}

class Barco {
  constructor(ubicacion) {
    this.ubicacion
  }

  disparar () {

  }

  observar () {

  }
}