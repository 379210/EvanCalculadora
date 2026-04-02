// Primer programa de ejemplo en C++
//abrir shell y escribir g++ hola.cpp -o hola.exe
//para compilar: g++ hola.cpp
//para ejecutar: ./a.out

#include <iostream>
//void lista(int numeros[],int tam); //declarar

//definir o construir
//sumar una lista de numeros
int lista( int numeros[], int tam){
    int total = 0;
    for (int i = 0; i < tam; i++){
        total += numeros[i];
     }
   return total; 
}

int main () 
{ //declara 2 variables numeros enteros y  sumalas  y muestra el resultado
    int num1 = 10;
    int num2 = 20;
    int suma = num1 + num2;
    std::cout << suma<<"\n";
    float num1_ = 1.79;
    float num2_ = 1.21;
    float suma_ = num1_ + num2_;    º111º
    std::cout << suma_ <<"\n";
    char num1__ = 'a';
    char num2__ = 'b';
    // std::cout << num1__<<"/n";
    // std::cout << num2__<<"/n";
    char suma__ = num1__ + num2__;
    // std::cout <<num1__<< num2__<<"\n";
    // std::cout << "Hola, mundo"<<"\n";
    std::cout <<"el total es"<<"\n";
    int numeros[3]= {1,2,3};
    int tot= lista( numeros, 3);
    std::cout <<tot<<"\n";
    
    return 0;    
}
