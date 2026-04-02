#include <iostream>
//compilar: g++ adios.cpp -o adios.exe
//ejecutar: ./adios.exe

int main ()
{
 
int n = 15;
int k = 0;
 int s = 0;
  for (int i = 0; k <= n; i++){
    k = k + 1;
    s = s + k;
  }
 std::cout << s <<"\n";
return 0;
}