"use strict"

//el buble do while ,  permite primero ejecutar un bloque de instrucciones y luego de eso comprueba si se cumple la condicion y se ejecutara tantas veces como el bloque de instrucciones necesite para cumplir con la condicion.

/* estructura 

var x = ...

do{
    bloque de instrucciones
    se recomienda a la var dejar la instruccion de incremento o decremento
    var-- o ++ ;
}while(la condiccion);

*/

var year = 20;

do{
    console.log("estas en tus " + year + " años");

    year++;

}while(year <= 30);