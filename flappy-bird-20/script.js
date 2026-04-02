let block = document.getElementById("block")
let hole = document.getElementById("hole")
let character = document.getElementById("character")
let jumping = 0;
let counter = 0

hole.addEventListener('animationiteration', () => {
  let randon = Math.random()*3;
  let top = (randon * 100) + 150;
  hole.style.top = -(top) + "px";
  counter++;

});
setInterval (function ( ){
 
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  if (jumping == 0){
character.style.top = (characterTop+3)+"px";
  } 
  let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
  let holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
  
  let ctop = -(500-characterTop);
  //|
   if((characterTop > 480 )||((blockleft < 20) && (blockleft > -50)) && ((ctop < holetop)||(ctop > holetop + 130))) {
     console.log(characterTop)
    alert("GAME OVER. Score "+counter)
    character.style.top = 100 + "px";
    counter = 0;
  }
 
},10);

function jump ()   {
  jumping = 1
  let jumpCount = 0; 
  let jumpInterval = setInterval(
          function(){
                     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
                      if ((characterTop > 6) && (counter<15)){
                      character.style.top = (characterTop-4)+"px";
                      }
                      if (jumpCount > 20){
                        clearInterval(jumpInterval)
                        jumping = 0;
                        jumpCount = 0;
                        }
                        jumpCount++;
                    },10)
}
/*

la función var declara a una variable,opcionalmente inicializándola con un valor
la función setInterval devuelve un ID de la interval que identifica de forma única la interval
La propiedad top establece o devuelve la posición superior de un elemento posicionado.
la función .addEventListener configura una función que se llamará cada vez que el evento especificado se entregue al objetivo.
la funcion .getelementbyID devuelve una referencia al elemento por su ID
El valor devuelto por getPropertyValue es una cadena texto que contiene el valor de la propiedad CSS especificada.
la funcion .getComputedStyle devuelve un objeto que contiene los valores de todas las propiedades CSS de un elemento
*/