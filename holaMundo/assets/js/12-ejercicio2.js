'use stritc'

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('introduce numeros positivos y termina el proceso con uno negativo' , 0));
    
    if(isNaN(numero,0)){
        numero = 0;
    }else if (numero >= 0){
        suma = suma + numero;
        contador++;
    }
    console.log('la suma de tu ingreso mas el numero anterior es ' + suma);
    console.log('ingreso numero ' + contador);

}while(numero >= 0);

    console.log('la suma de todos los numeros ingresados es ' + suma);
    console.log('la media de todos los numeros ingresados es ' + (suma/contador));

