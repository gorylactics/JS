'use strict'

// var numeros = [6];
// var numeros = new Array(6);
var numeros = [];

for(var i = 0; i<=5 ;i++){
    // numeros[i] = parseInt(prompt('inserta un numero'));
    numeros.push(parseInt(prompt('ingresa un numero', 0)));
};

numeros.forEach((numeros,index, datos)=>{
    document.write('<br>' + numeros + '<br/>');
})

console.log(numeros);
