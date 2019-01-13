'use strict'

// transformaciones de texto

var numero = 444;
var texto1 = 'primer texto';
var texto2= 'segundo texto';
var textoTotal = texto1.concat(' ; ' + texto2); //concat es para concatenar cosas
var dato = numero.toString();

console.log(typeof(dato));
console.log(textoTotal);

// calcular longitud de texto
console.log(texto1.length);

var array=['hola' ,'chao' ,'nos vemos'];
console.log(array.length); //tambien sirve para contar los elementos dentro de un array
