function multiplicaQualquierElemento(arreglo) {
  let multiplicacionDeElementos = 0;
  let arregloMultiplicado = [];
   for (let i = 0; i < arreglo.length; i++){
    // multiplicacionDeElementos += arr[i];
    multiplicacionDeElementos = arreglo[i] * 2;  //multiplicador
   arregloMultiplicado.push(multiplicacionDeElementos)
   }
  return arregloMultiplicado;
}
console.log(multiplicaQualquierElemento([1, 2, 3, 4, 5,]))