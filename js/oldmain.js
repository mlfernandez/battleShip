
//ESCONDER PANTALLA 0, APARACE PANTALLA 1
//document.addEventListener('keypress', function (event) {
    //document.getElementById("idPantalla0").style.display = "none";
    //document.getElementById("idPantalla1").style.visibility = "visible";


    //document.getElementById("idPantalla1").style.display = "none";
    //document.getElementById("idPantalla2").style.visibility = "visible";
  }
  



/*
const hiddenFunction = (pantalla) => {
  let arrScreen= ["idPantalla0", "idPantalla1", "idPantalla2", "idPantalla3"];

  arrScreen = arrScreen.filter(val => !pantalla.includes(val));

  document.getElementById(pantalla).style.display = "block";

  for (let_screen of arrScreen) {
      document.getElementById(_screen).style.display = "none";
  }


}

*/
















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