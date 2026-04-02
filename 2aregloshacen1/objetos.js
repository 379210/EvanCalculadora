function juntaLosArreglos(arreglo1, arreglo2) {
  const arreglosJuntos = arreglo1.concat(arreglo2);
  return arreglosJuntos;
}
console.log(juntaLosArreglos([1], [2]))

//otra forma de hacerlo:

function juntaLosArreglos(arreglo1, arreglo2) {
  let primerArreglo = 0;
  let segundoArreglo = 0;
  let arreglosJuntos = [];
   for (let i = 0; i < arreglo1.length; i++){
    primerArreglo = arreglo1[i];
    arreglosJuntos.push(primerArreglo);
   }
   for (let i = 0; i < arreglo2.length; i++){
    segundoArreglo = arreglo2[i];
    arreglosJuntos.push(segundoArreglo);
   }
  return arreglosJuntos;
}
console.log(juntaLosArreglos([1 , 3], [2,5,6]))

//Tarea
/* realizar una funcion que reciba  2 numeros y me devuelva el mayor de los 2 numeros*/
function elMayorNumero (numero1, numero2){
  if (numero1 > numero2) {
    return numero1;
  }
  else {
    return numero2;
  }
}
console.log(elMayorNumero(1, 2))

//con tres numeros

function elMayorNumerodetres (numero1, numero2, numero3){
  if ((numero1 > numero2) && (numero1 > numero3)){
    return numero1;
  }
   if ((numero2 > numero3) && (numero2 > numero1)){
    return numero2;
   }
    if ((numero3 > numero1) && (numero3 > numero2)){
    return numero3;
    }
}
console.log(elMayorNumerodetres(1, 2, 3))

//El mayor elemento de un arreglo

function elMayorElemento(arreglo) {
  let elemento = 0;
  let mayorElemento = arreglo[0];
   for (let i = 0; i <= arreglo.length; i++){
    elemento = arreglo[i];
     if (mayorElemento < elemento) {
      mayorElemento = elemento;
     }
     if (mayorElemento >= elemento) {
      mayorElemento = mayorElemento;
     }
  }
  return mayorElemento;
}
console.log(elMayorElemento([1, 2, 3,98, -3, 100]))

//Regresa los numeros pares de dos arreglos

function numerosParesDeUnArreglo(arreglo1, arreglo2){
  let numerosPares = [];
  let arreglosJuntados = []
  arreglosJuntados = arreglo1.concat(arreglo2);
  for (let i = 0; i < arreglosJuntados.length; i++){
    if (arreglosJuntados[i] % 2 === 0){
      numerosPares.push(arreglosJuntados[i]);
    }
  }
  return numerosPares;
}
console.log(numerosParesDeUnArreglo([1, 5, 8, 24, 1022], [1002, 1003, 1028, 109, 198]))

const alumno1 = {
   "nombre":"Pepito Alvarez Noruego de los Rios",
   "edad": "20",
   "nivel de educacion": "universitario",
   "semestre/grado":"2do",
   "carrera": "Ingenieria de sistemas",
   "numero de lista" : 1
}
const alumno2 = {
   "nombre":"Juanito Hernandez vicacio fuentes",
   "edad": "19",
   "nivel de educacion": "universitario",
   "semestre/grado":"1ro",
   "carrera": "Gastronomia",
   "numero de lista" : 2
}
let alumnos = [alumno1, alumno2];
function carrerasDeAlumnos(losAlumnos){
  let carreras = [];
  for (let i = 0; i < losAlumnos.length; i++) {
    carreras.push(losAlumnos[i].carrera); 
  }
  return carreras;
}
console.log(carrerasDeAlumnos(alumnos));

//varios alumnos 

function alumnosConNumeroDeLista(numeroDeLista) {
  let alumnosConNumeros = [];
  let alumno = {}
  for (let i = 1; i <= numeroDeLista; i++){
    alumno = {
       "nombre":"Pepito Alvarez Noruego de los Rios",
       "edad": "20",
       "nivel de educacion": "universitario",
       "semestre":"2do",
       "carrera": "Ingenieria de sistemas",
       "numerodelista": i
    }
    alumnosConNumeros.push(alumno);
  }
  return alumnosConNumeros;
}

console.log(alumnosConNumeroDeLista(24))

//nombre y numero de lista de varios alumnos

function nombreYNumeroDeListaDeAlumnos(arrayAlumnos) {
  let nombreYNumerosDeListas = [];
  for(let i = 0;i < arrayAlumnos.length; i++){
  nombreYNumerosDeListas.push([arrayAlumnos[i].numerodelista,arrayAlumnos[i].nombre]);
  }
  return nombreYNumerosDeListas;
}

console.log(nombreYNumeroDeListaDeAlumnos(alumnosConNumeroDeLista(24)))

//sin parametro

function nombreYNumeroDeListaDeAlumnosSinParametros() {
  let nombreYNumerosDeListas = [];
  let objeto = alumnosConNumeroDeLista(24);
  for(let i = 0;i < objeto.length; i++){
  nombreYNumerosDeListas.push([objeto[i].numerodelista,objeto[i].nombre]);
  }
  return nombreYNumerosDeListas;
}

console.log(nombreYNumeroDeListaDeAlumnosSinParametros())

//pregunta y respuesta

var readlineSync = require('readline-sync');

function preguntaYRespuesta (pregunta) {
  // Wait for user's response.
   let respuesta = readlineSync.question(pregunta);
  return respuesta;
}

// let resp = preguntaYRespuesta("Cuál es tu nombre?")
// console.log(`Tu nombre es ${resp}`)

// objeto con preguntas

function crearObjetoDeAlumno () {
  let nombre = preguntaYRespuesta("Cuál será el nombre del alumno?");
  let edad = preguntaYRespuesta("Cuál será su edad?");
  let nivelDeEducacion = preguntaYRespuesta("Cuál será su nivel de educación?");
  let semestre_o_grado = preguntaYRespuesta("Cuál será su semestre/grado?");
  let carrera = preguntaYRespuesta("Cuál sera su carrera?");
  let numerdoDeLista = preguntaYRespuesta("Cuál sera su número de lista?");
  const alumno = {
       "nombre":nombre,
       "edad": edad,
       "nivel_de_educacion": nivelDeEducacion,
       "semestre_o_grado":semestre_o_grado,
       "carrera": carrera,
       "numero_de_lista": numerdoDeLista
    }
  return alumno;
}

//console.log(crearObjetoDeAlumno());

//haciendo N objetos

//let numeroDeAlumnosCreados = preguntaYRespuesta("Cuántos alumnos quiere crear?");
function nAlumnos(numeroDeAlumnos) {
  let Alumnos = [];
  for (let i = 0; i < numeroDeAlumnos; i++){
    Alumnos.push(crearObjetoDeAlumno());
  }
  return Alumnos;
}
//console.log(nAlumnos(numeroDeAlumnosCreados))

//buscando alumno

const alumno3 = {
     "nombre":"Pedrito Tapatío Palacio de la Zaragoza",
     "edad": "21",
     "nivel de educacion": "universitario",
     "semestre/grado":"3ro",
     "carrera": "Turismo",
     "numero de lista": 3
}
const alumnosParaBuscar = nAlumnos(10);
function buscarAlumno(atributo, numerodelista) {
  let num = numerodelista-1;
  let atributoParaRetornar = "nada";
  for (let i = 0; i < alumnosParaBuscar.length; i++){
    if (i == num ) {
      atributoParaRetornar = alumnosParaBuscar[i][atributo];
    }
  }
  return atributoParaRetornar;
}
   console.log(buscarAlumno('nombre', 5))