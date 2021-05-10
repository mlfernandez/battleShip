//ESCONDER PANTALLA 0, APARACE PANTALLA 1

//const cambiarPantalla = (pantalla) => {

let pantalla = "screen0";

document.addEventListener('keypress', function (event) {

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
    pantalla = "screen2";
 
    // cuando entra en pantalla 3
  } else if (pantalla === "screen2") {
    document.getElementById("idPantalla0").style.display = "none";
    document.getElementById("idPantalla1").style.display = "none";
    document.getElementById("idPantalla2").style.display = "none";
    document.getElementById("idPantalla3").style.display = "inline";
    pantalla = "screen3";

  } else {
    //alert("falta hacer mas pantallas");
  
  }
})
//}

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