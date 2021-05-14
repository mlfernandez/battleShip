class Barco {
  constructor(game, nombre, municiones) {
    this.game = game;
    this.nombre = nombre;
    this.zonaUbicacion = Math.floor(Math.random() * 8) + 1;
    this.municiones = municiones;
  }

  disparar(aQueBarco, aQueZona) {
    //el barco dispara al barco enemigo en una zona
    //barcoEnemigo.observar(zona)

    // se comprueba que tenga municiones para poder disparar
    if (this.municiones === 0) {
    } else {
      // tiene municiones, descontamos 1 municion
      this.municiones = this.municiones - 1;

      // disparamos
      setTimeout(() => aQueBarco.observar(aQueZona), 2000);
    }
  }

  observar(zonaAtacada) {
    // se recibe un ataque se verifica si el ataque es de la misma
    // zona donde esta el barco, si es invoca a hundido, en caso contrario
    // devuelve agua
    /*alert(
      "esta observando, barco ubicado en" +
        this.zonaUbicacion +
        " zona atacada" +
        zonaAtacada
    );*/

    if (this.zonaUbicacion == zonaAtacada) {
      this.game.mostrarHundido(zonaAtacada);
      
    } else {
      //alert("va a mostrar agua");
      this.game.mostrarAgua(zonaAtacada);
    }
  }
}

class Game {
  constructor() {
    this.turnoJugador = 1;
    this.ganador = false;
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

    //poner imagen de hundido
    this.crearAnimacion("img/sunken3.png", "agua", "zona" + zona);

    this.reproducirSonido("audio/hundidoS.mp3");

    this.ganador = true;

    //mostrar fin de juego y opcion restart

    document.getElementById("winner").innerText =
      "El ganador es el jugador " +
      this.turnoJugador +
      ", presiona cualquier tecla para volver a jugar.";

    setTimeout(() => cambiarPantalla("idPantalla5"), 2000);
  }

  mostrarAgua(zona) {
    // alert("Agua!!!" + this.turnoJugador);
    // pasar el turno al siguiente jugador y mostrar turno

    if (this.turnoJugador == 1) {
      this.turnoJugador = 2;
    } else {
      this.turnoJugador = 1;
    }

    //mostrar imagen de agua en zona y sonido

    this.crearAnimacion("img/water.png", "agua", "zona" + zona);
    this.reproducirSonido("audio/aguaS.mp3");

    this.mostrarTurno();
  }

  crearAnimacion(archivoImagen, claseImagen, idzona) {
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
    setTimeout(() => src.removeChild(img), 2000);

    // fin seccion mostrar agua
  }

  reproducirSonido(sonidoPath) {
    let sonido = document.createElement("audio");
    sonido.src = sonidoPath;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none";
    document.body.appendChild(sonido);

    sonido.play();
  }

  pararSonido() {
    let sonido = document.getElementById("audioIntro");
    sonido.pause();
  }

  mostrarMuniciones(barcoJ1, barcoJ2) {
    //mostrar un cartel con la cantidad de municiones de cada barco
    document.getElementById("municionesJ1").innerText =
      "El jugador uno tiene " + barcoJ1.municiones + " municiones.";
    document.getElementById("municionesJ2").innerText =
      "El jugador dos tiene " + barcoJ2.municiones + " municiones.";
  }

  mostrarEmpate() {
    alert("empate!");
    cambiarPantalla("idPantalla5");

    document.getElementById("winner").innerText =
      "Es empate, presiona cualquier tecla para volver a jugar.";

    setTimeout(() => cambiarPantalla("idPantalla5"), 2000);
  }
}

const cambiarPantalla = (destinoPantalla) => {
  let arrPantalla = [
    "idPantalla0",
    "idPantalla1",
    "idPantalla2",
    "idPantalla3",
    "idPantalla4",
    "idPantalla5",
  ];

  for (let i of arrPantalla) {
    if (i == destinoPantalla) {
      document.getElementById(i).style.display = "inline";
    } else {
      document.getElementById(i).style.display = "none";
    }
  }
};
