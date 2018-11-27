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

/* podemos dar la orden para salir de un buble con la insercion de un 

if(condicion de la variable para terminarla)
    break; 
    
Y se coloca luego del do para que de esa manera se ejecute correctamente el corte , de lo contrario el bucle termina con un dato menos de lo que deberia*/


var year = 20;

do{
    console.log("estas en tus " + year + " años");
    if(year==28)
        break;
    year++;
    

}while(year <= 30)
