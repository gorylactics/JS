//programa que pida dos numeros , y que diga cual es el mayor, cual es el menor o si son iguales

var numero1 = parseInt(prompt("ingresa numero"));
var numero2 = parseInt(prompt("ingresa numero"));


if(numero1 == numero2){
    console.log("son identicos");
}else if (numero1 > numero2){
    console.log(numero1 + " es mayor que " +  numero2);
}else if (numero1 < numero2){
    console.log( numero1 + " es menor que " + numero2);
}else{
    console.log("ingreso de caracteres distintos a numeros");
};

