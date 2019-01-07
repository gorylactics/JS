//programa que pida dos numeros , y que diga cual es el mayor, cual es el menor o si son iguales

var numero1 = parseInt(prompt("ingresa primer numero",0));
var numero2 = parseInt(prompt("ingresa segundo numero",0));

while(isNaN(numero1)|| isNaN(numero2)){
    var numero1 = parseInt(prompt("ingrese el primer numero real",0));
    var numero2 = parseInt(prompt("ingrese segundo numero real",0));
}
if(numero1 == numero2){
    console.log("son identicos");
}else if (numero1 > numero2){
    console.log(numero1 + " es mayor que " +  numero2);
}else if (numero1 < numero2){
    console.log( numero1 + " es menor que " + numero2);
}else{
    console.log("ingreso de caracteres distintos a numeros");
};

