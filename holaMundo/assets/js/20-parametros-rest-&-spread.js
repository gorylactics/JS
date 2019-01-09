'use strict'

// los parametros rest y spread sirven para mostar un conjunto de elementos dentro de un array
//  para usarlo se usan ... ya sea adelante de un parametro o al final dependiendo del lugar es por donde se mostrara el array

function listadoFrutas(fruta1 , fruta2 , ...restoFrutal){
    console.log('la fruta es : ' , fruta1);
    console.log('la fruta es : ' , fruta2);
    console.log('el resto de frutas son : ' , restoFrutal);
};

// entonces si creamos un listado de frutas como el llamado a la function con rest , guarda el resto de elementos que no alcanzan en los parametros dentro de un array
listadoFrutas('naranja' , 'sandia' , 'melon' , 'pera' , 'kiwi');

//y si por el contrario , se desea hacer que un array tome el orden de los parametros y el resto quede dentro de un array se usa spread 
// se debe crear una variable para el array

 var listadorFrutasSpread = ['naranjaSpread' , 'sandiaSpread'];

 // y luego la variable se ingresa en el listado
 listadoFrutas( ...listadorFrutasSpread,'naranja' , 'sandia' , 'melon' , 'pera' , 'kiwi');