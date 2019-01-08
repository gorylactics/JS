'use strict'

var numero1 = parseInt(prompt('ingresa la primera cifra' , 0))
var numero2 = parseInt(prompt('ingresa la segunda cifra' , 0))

while(isNaN(numero1 && numero2)){
    numero1 = parseInt(prompt('ingresa la primera cifra' , 0))
    numero2 = parseInt(prompt('ingresa la segunda cifra' , 0))
};

var resultado = 'la suma es = '+(numero1+numero2)+'<br/>'+
                'la resta es = '+(numero1-numero2)+'</br>'+
                'la multiplicacion es = '+(numero1*numero2)+'</br>'+
                'la division es = '+(numero1%numero2);

var resultadoAlert = 'la suma es = '+(numero1+numero2)+'\n'+
                'la resta es = '+(numero1-numero2)+'\n'+
                'la multiplicacion es = '+(numero1*numero2)+'\n'+
                'la division es = '+(numero1%numero2);        

alert(resultadoAlert);

document.write(resultado);