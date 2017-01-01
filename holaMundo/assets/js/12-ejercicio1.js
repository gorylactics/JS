//programa que pida dos numeros , y que diga cual es el mayor, cual es el menor o si son iguales

var numero1 = parseInt(prompt("ingresa primer numero",0));
var numero2 = parseInt(prompt("ingresa segundo numero",0));


if(numero1 == numero2){
    document.write("son identicos");
}else if (numero1 > numero2){
    document.write(numero1 + " es mayor que " +  numero2);
}else if (numero1 < numero2){
    document.write( numero1 + " es menor que " + numero2);
}else{
    document.write("ingreso de caracteres distintos a numeros");
};

