//ESCONDER PANTALLA

let pantalla = "screen2";

document.addEventListener("keypress", function (event) {
  //alert(pantalla);
  // cuando entra en pantalla 1
  if (pantalla === "screen0") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "inline";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "none";
    document.getElementById("idPantalla5").style.display = "none";
    pantalla = "screen1";

    // cuando entra en pantalla 2
  } else if (pantalla === "screen1") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "inline";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "none";
    document.getElementById("idPantalla5").style.display = "none";
    pantalla = "screen2";

    // cuando entra en pantalla 3 chooseShip
  } else if (pantalla === "screen2") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "inline";
    document.getElementById("idPantalla4").style.display = "none";
    document.getElementById("idPantalla5").style.display = "none";
    pantalla = "screen3";
  } else if (pantalla === "screen4") {
    switch (event.key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        // alert(partida.turnoJugador);
        if (partida.turnoJugador == 1) {
          barcoJugador1.disparar(barcoJugador2, event.key);
        } else {
          barcoJugador2.disparar(barcoJugador1, event.key);
        }
        break;
    }

    // cuando entra en pantalla 5
  } else if (pantalla === "screen4") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "none";
    document.getElementById("idPantalla5").style.display = "inline";
    pantalla = "screen5";

    // vuelve a la pantalla 3 (hay que cambiarlo)
  } else {
  }
});

class Barco {
  constructor(nombre, resistencia) {
    this.nombre = nombre;
    this.zonaUbicacion = Math.floor(Math.random() * 8) + 1;
    this.resistencia = resistencia;
  }

  disparar(Barco, aquezona) {
    // el barco dispara al barco enemigo en una zona
    //barcoEnemigo.observar(zona)
    Barco.observar(aquezona);
  }

  observar(zonaAtacada) {
    // se recibe un ataque se verifica si el ataque es de la misma
    // zona donde esta el barco, si es invoca a hundido, en caso contrario
    // devuelve agua
    alert(
      "esta observando, barco ubicado en" +
        this.zonaUbicacion +
        " zona atacada" +
        zonaAtacada
    );
    if (this.zonaUbicacion == zonaAtacada) {
      partida.mostrarHundido(zonaAtacada);
    } else {
      //alert("va a mostrar agua");
      partida.mostrarAgua(zonaAtacada);
    }
  }
}

class Game {
  constructor() {
    //this.zona = zona;
    //this.sizeTablero = 9;
    this.turnoJugador = 1;
  }

  mostrarTurno() {
    //alert("Es el turno del jugador " + this.turnoJugador + " ya puede disparar a una zona del tablero.");
    document.getElementById("turno").innerText =
      "Es el turno del jugador " +
      this.turnoJugador +
      ", ya puede disparar a una zona del tablero.";
  }

  mostrarHundido(zona) {
    alert("Hundido!!!");
    //TODO poner imagen de hundido
    this.crearAnimacion('img/sunken3.png', 'agua','zona'+ zona, 1000);
    //TODO mostrar fin de juego y opcion restart
  }

  mostrarAgua(zona) {
    // alert("Agua!!!" + this.turnoJugador);
    // pasar el turno al siguiente jugador y mostrar turno

    if (this.turnoJugador == 1) {
      this.turnoJugador = 2;
    } else {
      this.turnoJugador = 1;
    }

    //mostrar imagen de agua en zona
    this.crearAnimacion('img/water.png', 'agua','zona'+ zona, 1000);

    this.mostrarTurno();
  }

  mostrarFuego() {}

  crearAnimacion(archivoImagen, claseImagen, idzona, tiempoMostrado) {
    
    //crea elemento imagen
    let img = document.createElement("img");

    // define las propiedades
    img.src = archivoImagen; //"img/water.png";
    img.className = claseImagen; //"agua";

    //busca donde insertar el elemento
    let src = document.getElementById(idzona); //"zona" + zona);

    //agrega el nuevo elemento
    src.appendChild(img);

    // espera 1 segundo y elimina el elemento recien creado
    setTimeout(() => src.removeChild(img), 1000);

    // fin seccion mostrar agua
  }
}

const chooseShip = (resistencia, tipoBarco) => {
  //alert(resistencia + tipoBarco);
  partida = new Game();
  barcoJugador1 = new Barco(tipoBarco, resistencia);
  barcoJugador2 = new Barco(tipoBarco, resistencia);

  // voy a mostrar la pantalla tablero
  document.getElementById("idPantalla0").style.display = "none";
  document.getElementById("idPantalla1").style.display = "none";
  document.getElementById("idPantalla2").style.display = "none";
  document.getElementById("idPantalla3").style.display = "none";
  document.getElementById("idPantalla4").style.display = "flex";
  document.getElementById("idPantalla5").style.display = "none";
  pantalla = "screen4";
  //poner en un div con el insert html
  partida.mostrarTurno();
};
