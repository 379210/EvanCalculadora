function sumaQualquierElemento(arreglo) {
  let sumaDeElementos = 0;
   for (let i = 0; i < arreglo.length; i++){
    // sumaDeElementos += arr[i];
    sumaDeElementos = sumaDeElementos + arreglo[i];  //sumador
  }
  return sumaDeElementos;
}
console.log(sumaQualquierElemento([1, 2, 3, 4, 5,]))