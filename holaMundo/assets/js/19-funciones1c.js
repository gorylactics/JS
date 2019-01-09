'use strict'

// es recomendable que una funcion no tenga mucho codigo, por lo cual se recomienda desglozarla y llamar a sus partes a la funcion que generara la logica para que sea mas legible, por lo que se subvide en otras funciolnes, de igual manera se deben pasar los parametros 

function porConsola(numero1 , numero2 , mostrar){
    
    console.log('suma '+ (numero1+numero2));
    console.log('resta '+ (numero1-numero2));
    console.log('multiplicacion '+ (numero1*numero2));
    console.log('division '+ (numero1/numero2));
    console.log('********************************')

};

function porPantalla(numero1, numero2, mostrar){
    document.write('suma '+ (numero1+numero2)+'<br/>');
    document.write('resta '+ (numero1-numero2)+'<br/>');
    document.write('multiplicacion '+ (numero1*numero2)+'<br/>');
    document.write('division '+ (numero1/numero2)+'<br/>');
    document.write('********************************'+'<br/>')
};

// y en la funcion de la logica se hace el llamado de las subfunciones sin la palabra function pero incluyendo los parametros

function calculadora(numero1 ,numero2 , mostrar = false){

    if(mostrar == false){    
        porConsola(numero1, numero2, mostrar);
    }else{
        porPantalla(numero1, numero2, mostrar);
    }
};

// asi queda una funcion mucho mas legible

calculadora(2,10,true);
calculadora(25,15);
