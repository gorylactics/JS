'use strict'

//  una funcion anonima es una funcion que no tiene nombre , el conjunto de instrucciones no tiene nombre por lo cual se puede guardar dentro de otra funcion
// de esa manera se pueden generar callbacks que son funcion que se ejecuta dentro de otra funcion
// la funcion anonima que se le pasa como parametro a otra funcion

function sumame(numero1 , numero2 , sumaYmuestra, sumaPordos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar); //RECIBE EL RESULTADO DE LA VARIABLE SUMAR
    sumaPordos(sumar);   //RECIBE EL RESULTADO DE LA VARIABLE SUMAR

};

// aca llamamos la funcion donde cada funcion tiene un parametro propio en este caso el parametro es DATO
// DATO recibe el resultado de la VARIABLE SUMAR 
// DATO = AL RESULTADO DE LA VARIABLE SUMAR
sumame(5 , 7 , function (dato) {
    console.log('la suma es : ' , dato); //ACA DATO ES EL RESULTADO PURO DE SUMAR
},
function(dato){
    console.log('la suma es : ' ,dato*2); //ACA DATO ES EL RESULTADO DE SUMAR MULTIPLICADO POR 2
}); 

// EN RESUMEN , PARA CADA PARAMETRO DE UNA FUNCION SE PUEDE CREAR UNA FUNCION QUE EJECUTE UNA ACCION  

