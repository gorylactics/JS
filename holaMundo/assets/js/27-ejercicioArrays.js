'use strict'

function  mostrarArray(elementos, textoCustom =''){
    document.write('<h1> contenido del array' + textoCustom + '</h1>');
    document.write('<ul>');
    elementos.forEach((elemento,index, datos) => { 
        document.write('<li>' + elemento + '<li/>');
    });
    document.write('</ul>');
}

// 1 PEDIR 6 NUMEROS
// var numeros = [6];
// var numeros = new Array(6);
var numeros = [];

for(var i = 0; i<=5 ;i++){
    // numeros[i] = parseInt(prompt('inserta un numero'));
    numeros.push(parseInt(prompt('ingresa un numero', 0)));
};

// 2 mostrar en el cuerpo de la pagina
mostrarArray(numeros);

// 3 mostrar en la consola
console.log(numeros);

// ordenar y mostrar

numeros.sort(function(a , b){
    return a-b });
mostrarArray(numeros , 'ordenado');

// invertir y mostrar
numeros.reverse();
mostrarArray(numeros , 'sentido inverso');

// mostrar cantidad de elementos de un array
document.write('<h1> el array posee: ' +  numeros.length + 'elementos');

// busqueda 
var busqueda = parseInt(prompt('busca un numero'));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write('encontrado');
    document.write('posicion de la busqueda ' + posicion);
}else{
    document.write('no encontrado');
};
