function addButton(text, fun) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.addEventListener("click", fun);
  document.body.appendChild(btn);
}
//********************************
function addInput(id, message, borde_color) {
  let input = document.createElement("input");
  input.id = id;
  input.placeholder = message;
  document.body.appendChild(input);
  input.style.border = `thick solid ${borde_color}`;
  return input.value;
}
//*****************************************
function getValueInput(id) {
  let element = document.getElementById(id);
  let value = element.value;
  value = parseInt(value);
  return value;
}
//*******************************************
function setValueInput(id, val) {
  let element = document.getElementById(id);
  element.value = val;
}
//***********************
function cuadrado() {
  let medida = getValueInput("in1");
  medida = parseInt(medida);
  let formula = medida * medida;
  return formula;
}
//******************************************************************
function print_cuadri() {
  let result = cuadrado();
  return result;
}
//******************************************************************
function triangulo() {
  let b_triangulo = getValueInput("in1");
  let h_triangulo = getValueInput("in2");
  b_triangulo = parseInt(b_triangulo);
  h_triangulo = parseInt(h_triangulo);
  let formula2 = (b_triangulo * h_triangulo) / 2;
  return formula2;
}
//******************************************************************
function print_tri() {
  let result = triangulo();
  return result;
}
//*************************************************************************************************************************************
addInput(
  "in1",
  "inserte la medida o sí quieres el triangulo base o lados para poligono",
  "blue"
);
addInput(
  "in2",
  "inserte la altura de un triangulo o los medida del poligono",
  "red"
);
addInput(
  "in3",
  "inserte la altura de un triangulo o los apotema del poligono",
  "orange"
);
addButton("click para saber el resultado del cuadrado", resultado);
addButton("click para saber el resultado del triangulo", resultado2);
addButton("click para saber el resultado del poligono", resultado3);
addButton("clickeame pa´sumar los numeros", resultado_2);
addButton("clickeame pa´restar los numeros", resultado2_2);
addButton("clickeame pa´multiplicar los numeros", resultado2_3);
addButton("borrar", borrar);

//********************************************************************************
function resultado() {
  setValueInput("in3", print_poli());
}
//********************************************************************************
function resultado2() {
  setValueInput("in3", print_tri());
}
//********************************************************************************
function resultado3() {
  setValueInput("in3", print_cuadri());
}
//******************************************************************
function poligono() {
  let lados_poligono = getValueInput("in1");
  let medida_poligono = getValueInput("in2");
  let apotema_triangulo = getValueInput("in3");
  lados_poligono = parseInt(lados_poligono);
  medida_poligono = parseInt(medida_poligono);
  apotema_triangulo = parseInt(apotema_triangulo);
  let formula3 = (medida_poligono * lados_poligono * apotema_triangulo) / 2;
  return formula3;
}
//******************************************************************
function print_poli() {
  let result = poligono();
  return result;
}
//********************************************************************************
function borrar() {
  setValueInput("in3", borrar_value());
  setValueInput("in1", borrar_value());
  setValueInput("in2", borrar_value());
}
//*********************************************************************************************
function borrar_value() {
  let value = "";
  return value;
}
function addButton(text, fun) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.addEventListener("click", fun);
  document.body.appendChild(btn);
}
//********************************
function addInput(id, message, borde_color) {
  let input = document.createElement("input");
  input.id = id;
  input.placeholder = message;
  document.body.appendChild(input);
  input.style.border = `thick solid ${borde_color}`;
  return input.value;
}
//*****************************************
function getValueInput(id) {
  let element = document.getElementById(id);
  let value = element.value;
  value = parseInt(value);
  return value;
}
//*******************************************
function setValueInput(id, val) {
  let element = document.getElementById(id);
  element.value = val;
}
//***********************
function suma() {
  let sum = getValueInput("in1") + getValueInput("in2");
  return sum;
}
//***********************
function resta() {
  let minus = getValueInput("in1") - getValueInput("in2");
  return minus;
}
//***********************
function multiplicacion() {
  let mult = getValueInput("in1") * getValueInput("in2");
  return mult;
}
//***********************
function division() {
  let div = getValueInput("in1") / getValueInput("in2");
  return div;
}
//***********************
function print_sumi() {
  let result = suma();
  return result;
}
//***********************
function print_resti() {
  let result = resta();
  return result;
}
//*************************************************
function print_multi() {
  let result = multiplicacion();
  return result;
}
//*************************************************
function printdivi() {
  let result = division();
  return result;
}
//*******************************************************************
function resultado_2() {
  setValueInput("in3", printsumi());
}
//********************************************************************************
function resultado2_2() {
  setValueInput("in3", print_resti());
}
//********************************************************************************
function resultado2_3() {
  setValueInput("in3", print_multi());
}
//********************************************************************************
function resultado4() {
  setValueInput("in3", printdivi());
}
