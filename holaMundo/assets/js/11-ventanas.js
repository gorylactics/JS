"use strict"

/* existen tres tipos de ventanas 

alert() que se puede usar como mensaje en pantalla

confirm() que se puede usar para aceptar o denegar la entrada 

prompt() que otorga una pregunta y el ingreso de un dato

y esos datos los podemos guardar dentro de variables para poder usar esos datos que nos ha enviado el usuario

*/

alert("ventana reflejo de lo que queramos mostrar");

var resultado= confirm("¿quires entrar?"); // devuelve booleanos
console.log(resultado);

var resultadoEdad= prompt("que edad tienes?" ) //prompt recive dos tipos de datos , un reflejo y un ingreso , y el ingreso lo podemos modificar con parseInt o parseFloat

console.log(parseInt(resultadoEdad));