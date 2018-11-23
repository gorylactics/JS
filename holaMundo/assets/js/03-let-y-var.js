"use strict"

// let es una variable que que limita su uso al bloque donde se esta usando
// var  es una variable global o local en una funcion sin importar el ambito del bloque , (este dentro o fuera de este)

let hola = "holaaaaaa"
document.write(hola);

var num = 40;
console.log(num); // valor en consola 40

if(true){
    var num = 50;
    console.log(num); //valor en consola 50 // ESTO ES UN BLOQUE
}

var num = 40;
console.log(num); // valor en consola 40 porque volvio a ser global ya que esta fuera del bloque

// esto debido a que var se adecua al lugar donde se ejecuta 

var texto = "variable JS (aca se muestra la variable original)"; 
console.log(texto);

if(true){
    let texto = "variable LET (variable modificada que solo funciona en el bloque)"; 
    console.log(texto);
};

console.log(texto , "vuelve a la normalidad porque esta fuera del bloque");