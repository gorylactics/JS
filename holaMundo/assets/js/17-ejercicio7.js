'use strict'

var numero = parseInt(prompt('que tabla de multiplicar veremos', 1));

document.write('<h2> TABLA DEL' +numero+'</h2>')

for(var i = 1 ; i<=10 ; i++){
    document.write(i + 'x' + numero + '=' +(i*numero)+ '</br>');
};


// para tener todas las tablas ya que se leen entre ambas variables se recorren de manera completa
for(var i = 1 ; i<=10 ; i++){
    document.write('<h3>tabla del '+i+'</h3>');
    for(var c = 1 ; c<=10 ; c++){
        document.write(i+ 'x' + c+ '=' +(i*c)+ '</br>');
    }
};