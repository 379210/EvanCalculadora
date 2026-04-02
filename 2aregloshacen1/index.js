var readlineSync = require("readline-sync");

function preguntaYRespuesta(pregunta) {
  // Wait for user's response.
  let respuesta = readlineSync.question(pregunta);
  return respuesta;
}

//sumar todos loso numeros del 1 al 1000

function sumaAlMil(){
  let suma = 0;
  for (let i = 1; i <= 1000; i++){
    suma += i;
  }
  return suma
}
console.log(sumaAlMil());

//n factorial

function factorial(n){
  let resultado = 1;
  for (let i = 1; n > 0; i++){
    resultado = resultado * n;
    n = n - 1;
  }
  return resultado;
}
console.log(factorial(4));

//calcular independiente la suma de los numeros pares e impares del 1 al 200

function sumaParesEImpares(){
  let sumaPares = 0;
  let sumaImpares = 0;
  for (let i = 1; i <= 200; i++){
    if (i % 2 == 0){
      sumaPares += i;
    } else {
      sumaImpares += i;
    }
  }
  return "la suma de los numeros pares de 1 al 200 es " + sumaPares + " y la suma de los impares es " + sumaImpares;
}
console.log(sumaParesEImpares())

//leer una serie de numeros distintos a cero y obtener el numero mayor

function numeroMayor(arr){
  let mayor = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > mayor){
      mayor = arr[i];
    }
  }
  return mayor;
}
console.log(numeroMayor([1, 3, 4, -9, -105, 20001, -99]))

//calcular la suma de los numeros pares comprendidos 20 y 400

function sumaPares(){
  let suma = 0;
  for (let i = 20; i <= 400; i++){
    if (i % 2 == 0){
      suma += i;
    }
  }
  return suma;
}
console.log(sumaPares())

//leer 500 numeros y obtener cuantos son positivos

function cuantosPositivos(arr){
  let contador = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      contador += 1;
    }
  }
  return "En el arreglo hay " + contador + " numeros positivos";
}
console.log(cuantosPositivos([1, -2, 3, -4, 5, -6, 7, 0, 55, 91, -100]))

//calcular la suma de los cuadrdos de los cien primeros numeros naturales

function sumaCuadrados(){
  let suma = 0;
  for (let i = 1; i <= 100; i++){
    suma += i * i;
  }
  return suma;
}
console.log(sumaCuadrados())

//sumar los numeros pares del 2 al 100

function sumaPares(){
  let suma = 0;
  for (let i = 2; i <= 100; i++){
    suma += i;
  }
  return suma;
}
console.log(sumaPares());

//sumar diez numeros

function sumaDeNumeros(arr){
  let suma = 0;
  for (let i = 0; i < arr.length; i++){
    suma += arr[i];
  }
  return suma;
}
console.log(sumaDeNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//calcular la media de 50 numeros

function mediaDe50(arr){
  let media = 0;
  let suma = 0;
  for (let i = 0; i < arr.length; i++){
    suma += arr[i];
  }
  media = suma / arr.length;
  return media;
}
console.log(mediaDe50([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]))

//calcular los nprimeros multiplos de 4

function multiplosDe4(n){
  let arr = [];
  for (let i = 1; i <= n; i++){
    arr.push(i * 4);
  }
  return arr;
}
console.log(multiplosDe4(5))

//dado 10 numeros enteros calcular la suma de los numeros pares, cuantos numeros pares existen y cual es la media aritmetica de los numeros impares

function sumaYCuantosParesYMediaAritmeticaImpares(arr){
  let suma = 0;
  let cuantos = 0;
  let media = 0;
  let sumaMedia = 0;
  let numerosImpares = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      suma += arr[i];
      cuantos += 1;
    } else {
      sumaMedia += arr[i];
      numerosImpares += 1;
    }
  }
  media = sumaMedia / numerosImpares;
  return [suma, cuantos, media];
}
console.log(sumaYCuantosParesYMediaAritmeticaImpares([1, 2, 3, 4]));

//calcular la nota media de los alumnos de una clase considerando n numero de alumnos y c numeros de notas de cada alumno

function notaMedia(n, c){
  let notas = [];//arreglo unidimensional
  let suma = 0;
  let media = 0;
  for (let i = 1; i <= n; i++){
     notas[i - 1] = [];//convirtiendo en un arreglo multidimensional
    for (let j = 1; j <= c; j++){
      console.log(notas[i - 1])//imprimiendo la fila i - 1 del arreglo multidimensional
       notas[i - 1][j - 1] = preguntaYRespuesta("Ingrese la nota " + j + " del alumno " + i + ":");//metiendo valores a la fila i - 1 columna j - 1 del arreglo multidimensional
      console.log(notas[i - 1][j - 1])//imprimiendo valores de la fila i - 1 columna j - 1 del arreglo multidimensional
      suma += parseFloat(notas[i - 1][ j - 1]);//parseFloat:convierte texto en numeros con decimal o enteros 
      console.log(suma)
    }
  }
  media = suma / (c * n);
  return "La nota media de la clase es " + media;
}
console.log(notaMedia(3, 3))

//escribir la suma de los primeros diez num3eros pares

function sumaPrimeros10Pares(){
let suma = 0;
  for (let i = 1; i <= 20; i++){
    if (i % 2  == 0){
      suma += i;
    }
  }
  return suma;
}

console.log(sumaPrimeros10Pares());

//sumar todos los numeros positivos proporcionados de una lista

function sumaPositivos(arr){
  let suma = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      suma += arr[i];
    }
  }
  return suma
}
console.log(sumaPositivos([1, -2, 3, -4, 5, -6, 7, 0, 55, 91, -100]))

//determinar en un arreglo de cien numeros: cunatos son menores de 15,cuantos son mayores de 50, y cuantos estan comprendidos entre 25 y 45

function determinarCuantos(arr){
  let menoresDe15 = 0;
  let mayoresDe50 = 0;
  let comprendidosEntre25y45 = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 15){
      menoresDe15 += 1;
    } else if (arr[i] > 50){
      mayoresDe50 += 1;
    } else if (arr[i] > 25 && arr[i] < 45){
      comprendidosEntre25y45 += 1;
    }
  }
  return "Hay " + menoresDe15 + " numeros menores de 15, hay " + mayoresDe50 + " numeros mayores de 50 y hay " + comprendidosEntre25y45 + " numeros comprendidos entre 25 y 45";
}

console.log(determinarCuantos( [1, 50, 125, 5000, -1, -5025, 12, 5, 10, 50]))

//sumar una secuencia deneteros y determinar si estan ordenados

function sumaSecuencia(arr){
  let suma = 0;
  let ordenados = true;
  for (let i = 0; i < arr.length; i++){
    suma += arr[i];
  if (arr[i] == i + 1){
      ordenados = true;
    } 
  else if (arr[i] !== i + 1){
      ordenados = false;
    }
  }
  if (ordenados == true){
    return "La secuencia esta ordenada y la suma de los numeros es " + suma;
  }
  else {
    return "La secuencia no esta ordenada y la suma de los numeros es " + suma
  }
}
console.log(sumaSecuencia([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));

//calcular si N es primo

function esPrimo(){
  let n = parseInt(preguntaYRespuesta("Ingrese un numero: "));
  let primo = true;
  for (let i = 2; i < n; i++){
    if (n % i == 0){
      primo = false;
    }
  }
  if (primo == true){
    return "El numero " + n + " es primo";
  }
  else {
    return "El numero " + n + " no es primo";
  }
}
let ejecutar=true
if(ejecutar==true ){console.log(esPrimo());}

//ver si un numero entre 1 y 10(incluidos) es par o impar

function paroimpar(num){
  if(num < 1 || num > 10){
    return "el numero no está dentro del rango"
  }
  else{
  if (num == 1 || num == 3 || num == 5 || num == 7 || num == 9){
    return " el numero es impar"
  }
  else{
    return"el numeo es par"
  }
  }
}
console.log(paroimpar(7));

//calcular el promedio de numeros proprcionados por el usuario con iteradors

function promedio(num, cuantos_num){
  let suma = 0;
  let promedio = 0;
  num_de_num = 0
  for(let i = 0; i < cuantos_num; i++){
    suma += num[i];
    num_de_num += 1;
    if(num_de_num == cuantos_num){
      promedio = suma / cuantos_num;
      return promedio
    }
  }
}
console.log(promedio([1, 2, 3, 4, 5], 5))