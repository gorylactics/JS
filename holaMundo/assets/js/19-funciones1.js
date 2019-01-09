'use strict'

// las funciones son un conjunto de reglas que se ejecutan cuando la invoquemos para generar algo , se pueden usar la cantidad de veces que se necesite


//de esta manera se define la funcion; palabra reservada function el nombre de la funtion mas () donde van los parametros de la funcion
function calculadora(){
    // conjunto de instrucciones de lo que debe hacer la function
    document.write('soy la calculadora <br/>');
    
    //el return no se muestra en consola salvo que llamemos a la function desde ahi
    return ('soy la calculadora de return');
};

// la function se puede llamar la cantidad de veces que se quiera desde donde se quiera , salvo que sea una funtion local

// invocar a la funtion siempre va con parentesis ()
calculadora();
calculadora();