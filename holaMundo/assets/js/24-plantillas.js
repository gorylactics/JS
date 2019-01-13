'use strict'

// plantillas de texto

var nombre = prompt('ingresa tu nombre');
var apellido = prompt('ingresa tu apellido');
// var texto = 'mi nombre es ' + nombre.concat(' ' + apellido);

// una plantilla se crea entre comillas invertidas `` y para llamar a la variable se hace con simbolo dolar mas llaves  ${}
var texto = `
Hola que tal mi nombre es : ${nombre} <br/>
y mi apellido es ${apellido} 
`
document.write(texto);

