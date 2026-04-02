#include <iostream>
//ls: ver directorios y archivos
//cd: cambiar de directorio
//compilar: g++ wasa.cpp -o wasa.exe
//ejecutar: ./wasa.exe
float *  kinds ()
{
  float *q = new float[2];
int n = 15;
float k = 0;
  for(int i = 0; i <= n; i++){
    if(k < n){
      k = k + 1;
      //std::cout << k << "\n";
    }
    if(k == n){
      k = k - 20;
      n = n - 1;
      std::cout << k << "\n";
     
    }
    if(k <= 0){
      //std::cout << k << "\n";
      k = 0;
      q[0] = k;
      q[1] = n;
     return q;
    }
    //std::cout << k << "\n";
 }
  return q;
}  

int main ()
{
  float *kn = kinds();
   std::cout << "k es igual a "<< kn[0] <<". N termino valiendo "<< kn[1]<<"\n";
  return 0;
}