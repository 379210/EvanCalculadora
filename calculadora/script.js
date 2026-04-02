//variable de bandera de apagado y encedido
let isOn=true
function setValueInput(id, val,) {
  if (isOn){
  let element = document.getElementById(id);
  element.value = val;
  }else if (isOn == false) {
    let element = document.getElementById(id);
    element.value = val;
    //writeInSamePage("bdbf")
  }
}
//*****************************************
function getValueInput(id) {
  let element = document.getElementById(id);
  let value = element.value;
  // value = parseInt(value);
  return value;
}
//*******************************************
function addButton(text, fun) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.addEventListener("click", fun);
  let game = document.getElementById("game");
  game.appendChild(btn);
}
//********************************
let pantalla = document.createElement("input");
pantalla.placeholder = "escribe algo";
pantalla.setAttribute('id', 'screen');
document.getElementById("game").appendChild(pantalla)
//********************************
let calcula1 = addButton("on/ce", on_ce)
let calcula2 = addButton("MRC")
let calcula3 = addButton("M-")
let calcula4 = addButton("M+")
let calcula5 = document.write("</br>")
let calcula6 = addButton("off",off)
let calcula7 = addButton("/2",entre_2)
let calcula8 = addButton("%", porcent)
let calcula9 = addButton("/", entre)
let calcula10 = document.write("</br>")
let calcula11 = addButton("7", siete)
let calcula12 = addButton("8", ocho)
let calcula13 = addButton("9", nueve)
let calcula14 = addButton("x", por)
let calcula15 = document.write("</br>")
let calcula16 = addButton("4", cuatro)
let calcula17 = addButton("5", cinco)
let calcula18 = addButton("6", seis)
let calcula19 = addButton("-", menos)
let calcula20 = document.write("</br>")
let calcula21 = addButton("1", uno)
let calcula22 = addButton("2", dos)
let calcula23 = addButton("3", tres)
let calcula24 = addButton("+", mas)
let calcula25 = document.write("</br>")
let calcula26 = addButton("0", cero)
let calcula27 = addButton(".", punto)
let calcula28 = addButton("=", equal)
let calcula29 = addButton("+", mas)
//*******************************************
function off (){
//alert("hola")
isOn = false
setValueInput("screen", "off")
  
}
//*******************************************
function on_ce() {
setValueInput("screen", "")
  isOn = true
}
//*******************************************
function anterior_vacio() {
  let numb = getValueInput("screen")
  //alert(numb.length)
  if (numb.length == 0) {
    numb = ""
  }
  return numb
}
//*******************************************
function entre_2 () {
let number1 = getValueInput("screen")
  //alert(number1)
let parsed_num = parseInt(number1)
  let entre = parsed_num / 2;
  //alert(entre)
setValueInput("screen",entre)
  return entre
}
//*******************************************
function porcent() {
  let num = setValueInput("screen", anterior_vacio() + "%")
  return num
}
//*******************************************

function entre() {
  let num = setValueInput("screen", anterior_vacio() + " /")
  return num
}
//*******************************************
function siete() {
  let num = setValueInput("screen", anterior_vacio() + "7")
  return num
}
//*******************************************
function ocho() {
  let num = setValueInput("screen", anterior_vacio() + "8")
  return num
}
//*******************************************
function nueve() {
  let num = setValueInput("screen", anterior_vacio() + "9")
  return num
}
//*******************************************
function por() {
  let num = setValueInput("screen", anterior_vacio() + " x ")
  return num
}
//*******************************************
function cuatro() {
  let num = setValueInput("screen", anterior_vacio() + "4")
  return num
}
//*******************************************
function cinco() {
  let num = setValueInput("screen", anterior_vacio() + "5")
  return num
}
//*******************************************
function seis() {
  let num = setValueInput("screen", anterior_vacio() + "6")
  return num
}
//*******************************************
function menos() {
  let num = setValueInput("screen", anterior_vacio() + " -")
  return num
}
//*******************************************
function uno() {
  let num = setValueInput("screen", anterior_vacio() + "1")
  return num
}
//*******************************************
function dos() {
  let num = setValueInput("screen", anterior_vacio() + "2")
  return num
}
//*******************************************
function tres() {
  let num = setValueInput("screen", anterior_vacio() + "3")
  return num
}
//*******************************************
function mas() {
  let num = setValueInput("screen", anterior_vacio() + " + ")
  return num
}
//*******************************************
function cero() {
  let num = setValueInput("screen", anterior_vacio() + "0")
  return num
}
//*******************************************
function punto() {
  let num = setValueInput("screen", anterior_vacio() + ".")
  return num
}
//*******************************************
function equal() {
  let mensage = getValueInput("screen")
  let cola_de_papa = mensage.split('+')
  //alert(cola_de_papa)
 let numero1 = parseInt(cola_de_papa[0])
  //alert(numero1)
  let numero2 = parseInt(cola_de_papa[1])
  //alert(numero2)
  let sum = numero1 + numero2;
setValueInput("screen",sum)
  return sum
}
//***********************
function print(){
  let result = equal()
  writeInSamePage(result)
  return result
}
//***************************************************
function writeInSamePage(message) {
  var newP = document.createElement("p");
  var textNode = document.createTextNode(message);
  newP.appendChild(textNode);
  document.body.appendChild(newP);
}