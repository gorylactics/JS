"use strict"


//los operadores son las operaciones matematicas basicas + - * /

var numero1= 7 ;
var numero2= 44 ;
var resultado= numero1*numero2; 
document.write("el resultado es: "+ resultado);

//tipos de datos: son:
// numeros enteros
// string o cadena de texto , las comillas dobles tienen mas prioridad que las simples en el string
// decimales o coma flotante 
// booleanos (true o false) sirven para hacer sentencias
// array 
// objetos

var numero_entero= 33;
var string= "hola que tal";
var booleanos= true;
console.log(numero_entero , string, booleanos);

// para convertir un string a numero se utiliza la opcion Number

var numeroFalso = "33.4"
console.log(numeroFalso);
console.log(numeroFalso+7, "aca solo concatena porque son cosas distinas");
console.log(Number(numeroFalso)+7, "con la opcion Number convierte el string en numero, y si muestra decimales");
console.log(parseInt(numeroFalso)+7, "con la opcion parseInt convierte el string en numero, pero no muestra decimales");
console.log(parseFloat(numeroFalso)+7, "con la opcion parseFloat convierte el string en numero, y si muestra decimales");

var experimiento = parseFloat(numeroFalso) * 2 //uso del recurso parseFloat dentro de una variable
console.log(experimiento ,"aca se muestra la ejecucion directa de parseFloat dentro de una variable"); 


// para cambiar un numero entero a string se usa la opcion String
var numero = 33;
console.log(String(numero)+7);
