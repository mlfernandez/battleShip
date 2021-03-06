//ESCONDER PANTALLA

document.addEventListener("keypress", function (event) {
  //alert(pantalla);
  // cuando entra en pantalla 1
  if (document.getElementById("idPantalla0").style.display === "inline") {
    cambiarPantalla("idPantalla1");

    // cuando entra en pantalla 2
  } else if (
    document.getElementById("idPantalla1").style.display === "inline"
  ) {
    cambiarPantalla("idPantalla2");

    // cuando entra en pantalla 3 chooseShip
  } else if (
    document.getElementById("idPantalla2").style.display === "inline"
  ) {
    cambiarPantalla("idPantalla3");
  } else if (document.getElementById("idPantalla4").style.display === "flex") {
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
        partida.reproducirSonido("audio/canonS.mp3");

        if (partida.turnoJugador == 1) {
          barcoJugador1.disparar(barcoJugador2, event.key);
        } else {
          barcoJugador2.disparar(barcoJugador1, event.key);
        }
        // actualizo y muestro
        partida.mostrarMuniciones(barcoJugador1, barcoJugador2);

        //chequear que queden municiones para poder disparar
        if (barcoJugador1.municiones == 0) {
          if (barcoJugador2.municiones == 0) {
            if (partida.ganador != true) {
              partida.mostrarEmpate();
            }
          }
        }

        break;
    }

    // cuando entra en pantalla 5
  } else if (
    document.getElementById("idPantalla5").style.display === "inline"
  ) {
    //reiniciar la partida
    //ir a pantalla 3 (elegir barco)
    cambiarPantalla("idPantalla3");
  } else {
  }
});

const chooseShip = (municiones, tipoBarco) => {
  //alert(game, municiones + tipoBarco);
  partida = new Game();
  barcoJugador1 = new Barco(partida, tipoBarco, municiones);
  barcoJugador2 = new Barco(partida, tipoBarco, municiones);

  // voy a mostrar la pantalla tablero screen4
  //poner en un div con el insert html
  cambiarPantalla("idPantalla4");
  document.getElementById("idPantalla4").style.display = "flex";


  partida.mostrarTurno();
 
  partida.pararSonido();

  partida.mostrarMuniciones(barcoJugador1, barcoJugador2);
};
