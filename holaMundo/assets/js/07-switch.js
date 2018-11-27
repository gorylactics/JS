"use strict"

var edad = 70;
var imprime = "";


switch(edad){
    case 18:
        imprime = "ya eres mayor de edad"
    break;

    case 34:
        imprime = "ya eres adulto"
    break;

    case 70:
        imprime = "eres anciano"
    break;

    default: imprime = "eres marciano"
    break;

    
}
console.log(imprime);