'use strict'

window.addEventListener('load', function(){
    // timers
    var tiempo = setInterval(function(){
        console.log('set intervar ejecutado')

        var encabezado = document.querySelector('#titulo');
        if(titulo.style.fontSize == '50px'){
            titulo.style.fontSize = '20px';
        }else{
            titulo.style.fontSize = '50px'
        };

    }, 300)
});