'use strict'

// parametros opcionales
// los parametros opcionales son parametros que no es necesario darle un resultado , si no que viene inicializado por defecto 
// entonces lo pudemos usar para gestionar diferentes cosas como por ejemplo meterlo en un loop para que se ejecute de la manera que queremos

function calculadora(numero1 ,numero2 , mostrar = false){

    if(mostrar == false){    
        console.log('suma '+ (numero1+numero2));
        console.log('resta '+ (numero1-numero2));
        console.log('multiplicacion '+ (numero1*numero2));
        console.log('division '+ (numero1/numero2));
        console.log('********************************')
    }else{
        document.write('suma '+ (numero1+numero2)+'<br/>');
        document.write('resta '+ (numero1-numero2)+'<br/>');
        document.write('multiplicacion '+ (numero1*numero2)+'<br/>');
        document.write('division '+ (numero1/numero2)+'<br/>');
        document.write('********************************'+'<br/>')
    }
};

// for(var i=1 ; i <= 10 ; i++){
//     console.log(i) 
//     calculadora(i , 8 )
// };

calculadora(2,5,true);
calculadora(5,15);
