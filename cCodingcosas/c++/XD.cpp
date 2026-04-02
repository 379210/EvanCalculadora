#include <iostream>
//ls: ver directorios y archivos
//cd: cambiar de directorio
//compilar: g++ XD.cpp -o XD.exe
//ejecutar: ./XD.exe
int *kinds()
{
  
  int *q = new int[2];
int numeros[3] = {7, 5, 3};
  int largo = 0;
  largo = sizeof(numeros)/sizeof(numeros[0]);
 for(int i = 0; i < largo; i++){
   if(numeros[i] <= 0){
     q[0] = numeros[i];
     q[1] = i + 1;
    return q;
   }
   if(i == largo - 1){
     if(numeros[i] <= 0){
        q[0] = numeros[i];
        q[1] = i + 1;
       return q;
      }
     else{
       std::cout << "No hay ningun numero que sea menor o igual a 0." << "\n";
       return q;
     }
   }
 }
  return q;
}

int main ()
{
int *pos = kinds();
  if(pos[0] == 0 && pos[1] == 0){
    return 0;
  }
  std::cout << "El número en la posición "<< pos[1] << " es menor o igual a 0. El número es el " << pos[0] << "." << "\n";
}