'use strict'

// son conocidos como arreglos , matrices 
// es una variable con muchos datos 
// un array dentro de un array es un red multidimensional
//  se pueden mesclar los tipos de datos 
// hay dos formas de hacer un array

var ejemplo1= [1,2,3,'etc'];
var ejemplo2= new Array(4,5,6,'etcccc');

// los array se miden por indice el cual comienza por 0
// para acceder a un dato especifico de un array cuando hacemos el llamado en el nombre de la variable se especifica mediante corchetes

/* var elemento = parseInt(prompt('que numero de elemento quieres ' , 0));

if(elemento >= ejemplo1.length){
    alert('escoge un numero menor a ' + ejemplo1.length );
}else{
    alert('el elemento es ' + ejemplo1[elemento]);
}; */

// para recorrer un array podemos usar los loops

// for (var i = 0 ; i < ejemplo1.length ; i++){
//     console.log(ejemplo1[i]);
// }

ejemplo1.forEach(ejemplo1=> {
    console.log(ejemplo1);
});