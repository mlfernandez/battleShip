class Barco {

  constructor(nombre, resistencia){
      this.nombre = nombre;
      this.zona = Math.floor(Math.random() *8)+1;
      this.resistencia = resistencia;
    }


    disparar(Barco, aquezona) { 
    //TODO el barco dispara al barco enemigo en una zona
    //barcoEnemigo.observar(zona)
    Barco.observar(aquezona);
      }
    
    observar(zona) { 
    //TODO se recibe un ataque se verifica si el ataque es de la misma 
    // zona donde esta el barco, si es devuelve hundido, en caso contrario
    // devuelve agua

    }
}

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


const chooseShip = (resistencia, tipoBarco) => {

    alert(resistencia + tipoBarco);
    let barcoJugardo1 = new Barco(tipoBarco, resistencia);
    let barcoJugardo2 = new Barco(tipoBarco, resistencia);
    // voy a mostrar la pantalla tablero
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "inline";
    document.getElementById("idPantalla5").style.display = "none";
    pantalla = "screen4";

    }
        







// DECLARANDO CLASES
/*
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
  
  
  
  let barco1 = new Barco("A");
  //alert(barco1.ubicacion);
  
  let barco2 = new Barco("F");
  //alert(barco2.ubicacion);
  




