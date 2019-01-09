'use strict'

function calculadora(numero1 ,numero2){

    console.log('suma '+ (numero1+numero2));
    console.log('resta '+ (numero1-numero2));
    console.log('multiplicacion '+ (numero1*numero2));
    console.log('division '+ (numero1/numero2));
    console.log('********************************')
}


// se esta llamando los parametros pero una function se puede usar dentro de un loop tambien
// calculadora(4 , 6);
// calculadora(45 , 88);

for(var i=1 ; i <= 10 ; i++){
    console.log(i) //aca muestro en que parte de la iteracion va 
    calculadora(i , 8 ) // llamamos a la function y aca la var i pasa a tener el espacio del primer parametro
};