'use strict'

var numero = parseInt(prompt('introduce un numero', 1));
        console.log('el numero que ingresaste es el siguiente' + numero)
for(var i = 0 ; i <= numero ; i++){
    if(numero% i == 0){
        console.log('los numeros divisores del numero ingresado son los siguientes ' + i);
    }
}