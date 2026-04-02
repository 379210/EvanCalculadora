let character = document.getElementById("character");
let block = document.getElementById("block")
function jump(){
  if(character.classList !=("animate")){
  character.classList.add("animate");
  }
setTimeout(function(){
  character.classList.remove("animate")
},500)
}

let checkdead = setInterval (function(){
  let charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockleft < 50 && blockleft > 0 && charactertop >= 730){
    block.style.animation = "none"
        block.style.display = "none"
    alert("YOU LOSE :(")
  }
},10);
/*
https://lenguajejs.com/javascript/dom/manipular-clases-css/#:~:text=El%20objeto%20classList,forma%20m%C3%A1s%20intuitiva%20y%20l%C3%B3gica.

Si accedemos a .classList, nos devolverá un  (lista) de clases CSS de dicho elemento. Pero además, incorpora una serie de métodos ayudantes que nos harán muy sencillo trabajar con clases CSS:


*/