"use strict"

// una condicional es una instruccion que permite comparar algo y en funcion del resultado se ejecutara algo en especifico

/*
condicional if = si (ejecuta esto)
else = y si no (si no, pues ejecuta esto)

la estructura de esta condicional es:

if(ocurre tal condicion){
    ejecuta esto
} else {
    si no , pues ejecuta esto
};

*/

/*
Operadores relacionales

mayor >
menor <
mayor o igual >=
menor o igual <=
exactamente igual ==
distinto !=

*/ 

// var a = 12;
// var b = 20;

// if(a < b){
//     console.log("a es menor que b");
// }else{
//     console.log("b es 20");
// };

var edadLimite = 18;
var nombre = "adrian miranda";

if(edadLimite >= 18 && edadLimite <= 36){
    console.log("cumple requisito base");
    if(edadLimite <30){
        console.log("rango 1")
    }else if (edadLimite <=35){
        console.log("rango 2")
    }else if (edadLimite == 36){
        console.log("pero ya no califica por edad")
    } 
}else{console.log("no puede participar")}




// else{
//     console.log(nombre +" "+ "si se puede")
//     if(edad >= 18){
//         console.log("que si perrito")
//     }

/* 
    algo comun es anidar condicionales dentro de otras

    if(){
        respuesta ejecutora
        if ()
    }else
    y tambien existe el else if que es para limitar o poner tramos en una condicion
*/