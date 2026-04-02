var readlineSync = require("readline-sync");

function preguntaYRespuesta(pregunta) {
  // Wait for user's response.
  let respuesta = readlineSync.question(pregunta);
  return respuesta;
}

//saber si un numero es primo o no

function primoONo(numero) {
  let esPrimo = "el numero " + numero + " si es primo";
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      esPrimo = "el numero " + numero + " no es primo";
    }
    if (numero % i != 0) {
    }
  }

  return esPrimo;
}
console.log(primoONo(13));

//sumar todos los numeros pares hasta mil

function paresHastaX(X) {
  let numerosJuntos = 0;
  for (let i = 0; i <= X; i = i + 2) {
    numerosJuntos += i;
  }
  return numerosJuntos;
}
console.log(paresHastaX(10));

//Cuantó ahorré de dinero al echarle $x gasolina
let dineroParaGasolina = preguntaYRespuesta(
  "Cuánto dinero le va a echar de gasolina?",
);
let precioDeGasolinera1 = preguntaYRespuesta(
  "A cuánto cuesta el litro de gasolina en la primera gasolinera?",
);
let precioDeGasolinera2 = preguntaYRespuesta(
  "A cuánto cuesta el litro de gasolina en la segunda gasolinera?",
);
function cuantoAhorré(dinero, precioGasolina1, precioGasolina2) {
  let diferenciaGasolina = 0;
  let ahorre = 0;
  let gasolina1 = Math.floor((dinero / precioGasolina1) * 100) / 100;
  let Litros1 = preguntaYRespuesta(
    "Al echarle la gasolina de $" +
      precioGasolina1 +
      " se le llenará " +
      gasolina1 +
      " litros.(presione enter para continuar)",
  );
  let gasolina2 = Math.floor((dinero / precioGasolina2) * 100) / 100;
  let Litros2 = preguntaYRespuesta(
    "Al echarle la gasolina de $" +
      precioGasolina2 +
      " se le llenará " +
      gasolina2 +
      " litros.(presione enter para continuar)",
  );
  if (precioGasolina1 > precioGasolina2) {
    diferenciaGasolina = precioGasolina1 - precioGasolina2;
    ahorre = Math.floor(diferenciaGasolina * gasolina2 * 100) / 100;
    return (
      "Usted ahorrárá " +
      ahorre +
      " pesos si es que compra de la gasolina de $" +
      precioGasolina2 +
      "."
    );
  } else if (precioGasolina2 > precioGasolina1) {
    diferenciaGasolina = precioGasolina2 - precioGasolina1;
    ahorre = Math.floor(diferenciaGasolina * gasolina1 * 100) / 100;
    return (
      "Usted ahorrárá " +
      ahorre +
      " pesos si es que compra de la gasolina de $" +
      precioGasolina1 +
      "."
    );
  } else {
    return "Cualquiera de los dos que compre le saldrán al mismo precio.";
  }
}
console.log(
  cuantoAhorré(dineroParaGasolina, precioDeGasolinera1, precioDeGasolinera2),
);

//encontrar el numero mayor

function numMayor(num1, num2, num3) {
  let Mayor = 0;
  if (num1 > num2) {
    Mayor = num1;
    if (Mayor > num3) {
    } else if (num3 > Mayor) {
      Mayor = num3;
    } else {
    }
  } else if (num2 > num1) {
    Mayor = num2;
    if (Mayor > num3) {
    } else if (num3 > Mayor) {
      Mayor = num3;
    } else {
    }
  } else {
    Mayor = num1;
  }
  return Mayor;
}
console.log(numMayor(15, 20, -3));

//numero mayor corto

function numMayorCorto(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(numMayorCorto(15, 20, -3));

// numero mayor de arreglo

function numeroMayorDeArreglo(arreglo) {
  let numMayor = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > numMayor) {
      numMayor = arreglo[i];
    }
  }
  return numMayor;
}
console.log(numeroMayorDeArreglo([1, 2, 3, 4, 5, 6]));

//el area y circumferencia de un circulo

function areaYCircunferencia(radio, medidaDeLongitud) {
  const pi = 3.141592;
  const diametro = radio * 2;
  let area = pi * (radio * radio);
  let circunferencia = pi * diametro;
  return (
    "El area del circulo es " +
    area +
    " " +
    medidaDeLongitud +
    " cuadrados" +
    " y su circunferencia es " +
    circunferencia +
    " " +
    medidaDeLongitud +
    "."
  );
}
console.log(areaYCircunferencia(10, "metros"));

//contar ceros en una secuencia

function contarCeros(secuencia) {
  let total = 0;
  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] == 0) {
      total += 1;
    }
  }
  return total;
}
console.log(contarCeros("5,3,0,2,4,4,0,0,2,3,6,0,2"));

//ver si la suma de dos numeros es igual a un tercer numero

function sumaIgualATercerNumero(num1, num2, num3) {
  let igualONo = "";
  if (num1 + num2 == num3) {
    igualONo = "Si son iguales";
  } else if (num1 + num3 == num2) {
    igualONo = "Si son iguales";
  } else if (num2 + num3 == num1) {
    igualONo = "Si son iguales";
  } else {
    igualONo = "No son iguales";
  }
  return igualONo;
}
console.log(sumaIgualATercerNumero(55, 30, 80));

//calcular el valor de la suma 1 + 2 + 2 + 4 ... + 100

function sumaTotal() {
  let contador = 1;
  let suma = 0;
  while (contador <= 100) {
    suma += contador;
    contador += 1;
  }
  return suma;
}
console.log(sumaTotal());

//calcular cuntos kilometros por minuto corrió en un maraton
function kilometrosPorMinuto() {
  let kilometros = preguntaYRespuesta("Cuantos kilometros corrió la persona?");
  let horas = preguntaYRespuesta("Cuantas horas corrió?");
  let minutos = preguntaYRespuesta("Cuantos minutos corrió?");
  let minutosTotales = horas * 60 + minutos;
  let kilometrosPorMinuto = kilometros / minutosTotales;
  return kilometrosPorMinuto;
}
console.log(kilometrosPorMinuto());

//usando un vriable auxiliar para intercambiar valores entre a y b

function intercambiarValores(a, b) {
  let aux = 0;
  aux = a;
  a = b;
  b = aux;
  let valoresIntercambiados = [a, b];
  return valoresIntercambiados;
}
console.log(intercambiarValores(5, 10));

//calcular el area de un triangulo

function areaDeTriangulo(base, altura) {
  let area = (base * altura) / 2;
  return area + "cm cuadrados";
}
console.log(areaDeTriangulo(5, 10));

//sumar los numeros del 0 l K

function del0ALK(K) {
  let suma = 0;
  let n = 0;
  while (n < K) {
    n += 1;
    suma += n;
  }
  return suma;
}
console.log(del0ALK(5));

//imprimir los numeros del 1 al 1000

function imprimirNumeros(num) {
  let numeros = [];
  for (let i = 1; i <= num; i++) {
    numeros.push(i);
  }
  return numeros;
}
console.log(imprimirNumeros(-5));
