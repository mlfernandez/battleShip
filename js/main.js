//ESCONDER PANTALLA

let pantalla = "screen0";

document.addEventListener("keypress", function (event) {
  //alert(pantalla);
  // cuando entra en pantalla 1
  if (pantalla === "screen0") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "inline";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "none";
    pantalla = "screen1";

    // cuando entra en pantalla 2
  } else if (pantalla === "screen1") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "inline";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "none";
    pantalla = "screen2";

    // cuando entra en pantalla 3
  } else if (pantalla === "screen2") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "inline";
    document.getElementById("idPantalla4").style.display = "none";
    pantalla = "screen3";

    // cuando entra en pantalla 4
  } else if (pantalla === "screen3") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "inline";
    pantalla = "screen4";
  
  
  } else {
    //alert("falta hacer mas pantallas");
  }
});

// DECLARANDO CLASES

class Tablero {
  constructor(zona) {
    this.zona = zona;
    this.size = 9;
  }

  dibujar() {
    //mostrar el tablero
  }

  asignar() {
    // asignar ubicacion zona
  }

  mostrarHundido() { }

  mostrarAgua() { }

  mostrarFuego() { }
}

class Barco {
  constructor(zona) {
    this.zona = zona;
  }

  disparar(aquebarco, aquezona) { 
//TODO el barco dispara al barco enemigo en una zona
//barcoEnemigo.observar(zona)

  }

  observar() { 
//TODO se recibe un ataque se verifica si el ataque es de la misma 
// zona donde esta el barco, si es devuelve hundido, en caso contrario
// devuelve agua


  }
}

let barco1 = new Barco("A");
//alert(barco1.ubicacion);

let barco2 = new Barco("F");
//alert(barco2.ubicacion);


/*
const chooseShip = (ship) => {


  if(barco1.length == 1 && barco2.length == 1){

        ir a la pantalla 4

          }
          
      
      
      document.getElementById(ship).onclick = "";
      document.getElementById(ship).className = "seleccionado";

      
  }
    
*/