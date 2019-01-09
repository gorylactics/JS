'use strict'

//  una funcion anonima es una funcion que no tiene nombre , el conjunto de instrucciones no tiene nombre por lo cual se puede guardar dentro de otra funcion
// de esa manera se pueden generar callbacks que son funcion que se ejecuta dentro de otra funcion
// la funcion anonima que se le pasa como parametro a otra funcion

function sumame(numero1 , numero2){
    var sumar = (numero1 + numero2);
    
};

sumame (4 + 5);
console.log(sumame(4,5));