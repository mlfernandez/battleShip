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

    // cuando entra en pantalla 3
  } else if (pantalla === "screen2") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "inline";
    document.getElementById("idPantalla4").style.display = "none";
    document.getElementById("idPantalla5").style.display = "none";
    pantalla = "screen3";

    // cuando entra en pantalla 4
  } else if (pantalla === "screen3") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "inline";
    document.getElementById("idPantalla5").style.display = "none";
    pantalla = "screen4";
  
    // cuando entra en pantalla 5
  } else if (pantalla === "screen4") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "none";
    document.getElementById("idPantalla4").style.display = "none";
    document.getElementById("idPantalla5").style.display = "inline";
    pantalla = "screen5";
  
  } else {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "inline";
    document.getElementById("idPantalla4").style.display = "none";
    document.getElementById("idPantalla5").style.display = "none";
    pantalla = "screen3";
  }



});

