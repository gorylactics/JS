'use strict'

var numero = parseInt(prompt('ingresa un numero', 0));

while(isNaN(numero)){
    numero = parseInt(prompt('ingresa un caracter numerico valido', 0));
};

if(numero%2 != 0 ){
    console.log(numero + ' este numero es impar')
}else {
    console.log(numero + ' este numero es par')
}