#include <iostream>
//ls: ver directorios y archivos
//cd: cambiar de directorio
//compilar: g++ contando_positivos.cpp -o contando_positivos.exe
//ejecutar: ./contando_positivos.exe

int kinds()
{
  int contador = 0;
int numeros[3] = {7, 5, 3};
  int largo = 0;
  largo = sizeof(numeros)/sizeof(numeros[0]);
 for(int i = 0; i < largo; i++){
   if(numeros[i] > 0){
      contador = contador + 1;
    }
   else{
    return contador;
   }
   if(i == largo - 1){
     if(numeros[i] > 0){
     std::cout << "No hay ningun numero que sea menor o igual a 0." << "\n";
     contador = 0;
     return contador;
     }
   }
 }
  return contador;
}

int main ()
{
int cuantos_num = kinds();
  if(cuantos_num == 0){
    return 0;
  }
  std::cout << "Hay "<< cuantos_num << " numeros positivos antes del primer negativo."<< "\n";
  return 0;
}