'use strict'

var numero = 444;
var texto1 = 'primer texto texto texto';
var texto2= 'segundo texto';

var busqueda = texto1.indexOf('texto'); //busca la primera coincidencia
console.log(busqueda);

var busqueda = texto1.lastIndexOf('texto'); // busca la ultima coincidencia
console.log(busqueda);

var busqueda = texto1.search('texto'); // busca la primera coincidencia
console.log(busqueda);

var busqueda = texto1.match(/texto/g); // recopila un array con todas las apariciones de la palabra, de esta manera muestra todas las coincidencias por que es una EXPRESION GENERAL
console.log(busqueda);

var busqueda = texto1.substr(0,4); // imprime desde la posicion que se indica mendiante numeros
console.log(busqueda);

var busqueda = texto1.charAt(4); // imprime lo que hay en esa posicion
console.log(busqueda);

var busqueda = texto1.startsWith('texto'); // busca texto en especifico al inicio del texto y devuelve true si la encuentra y false si no la encuentra
console.log(busqueda);

var busqueda = texto1.endsWith('texto'); // busca texto en especifico al final del texto y devuelve true si la encuentra y false si no la encuentra
console.log(busqueda);

var busqueda = texto1.includes('texto'); // busca una palabra en especifico en todo el texto y devuelve true si la encuentra y false si no la encuentra
console.log(busqueda);

var busqueda = texto1.replace('texto' , 'sexo'); // reemplaza el texto por lo que queramos
console.log(busqueda);

var busqueda = texto1.slice(2,10); // corta el texto desde donde le digamos
console.log(busqueda);

var busqueda = texto1.split(' '); // crea un array con todas las palabras del texto
console.log(busqueda);

var busqueda = texto1.trim(); // corta los espacios por delante y por detras  , se usa para cuando se guardan passwords
console.log(busqueda);