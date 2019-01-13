'use strict'

var texto = 'hola mundo soy una variable global'
var numero = 12

function holaMundo(texto){
    var mundo = 'variable local'
    console.log(texto);
    console.log(numero.toString());
    console.log(mundo.toUpperCase());

};

holaMundo(texto);

console.log(mundo);