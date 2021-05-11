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

let barco1 = new Barco("Aircraft",2);
alert(barco1.zona + barco1.nombre);

//let barco2 = new Barco("F");
//alert(barco2.ubicacion);


const chooseShip = (resistencia, tipoBarco) => {

    alert(resistencia + tipoBarco);
                
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
  




//Instancio barcos

let player1 = new Barco("Aircraft",1);
let player2 = new Barco("Carrier",2);
let player3 = new Barco("Submarine",3);
let player4 = new Barco("Warship",4);


let allBarcos = {
  "1" : player1,
  "2" : player2,
  "3" : player3,
  "4" : player4
}



const chooseShip = (barco) => {


    if(team2.length < 2){

        if(team1.length < 2){
            team1.push(allPlayers[fighter]);
            
        } else {
            
            team2.push(allPlayers[fighter]);

            if(team2.length == 2){
                console.log("ESTE ES EL TEAM1 ", team1);
                console.log("ESTE ES EL TEAM2 ", team2);
                llenaEquipos();
                cambiaFase("fase3");

                setTimeout(() => {
                    cambiaFase("fase4");
                }, 5000);
            }
            
        }
        
        document.getElementById(barco).onclick = "";
        document.getElementById(barco).className = "seleccionado";

        
    }
        
}
*/