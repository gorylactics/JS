'use strict'

window.addEventListener('load', function(){
    // timers

    function intervalo(){
        
        var tiempo = setInterval(function(){
            console.log('set intervar ejecutado')
    
            var encabezado = document.querySelector('#titulo');
            if(titulo.style.fontSize == '50px'){
                titulo.style.fontSize = '20px';
            }else{
                titulo.style.fontSize = '50px'
            };
    
        }, 700);
        
        return tiempo;
    };

    var tiempo = intervalo();
    var stop = document.querySelector('#stop');

    stop.addEventListener('click', function(){
        alert('se detuvo la variable tiempo')
        clearInterval(tiempo);

    });
    var start = document.querySelector('#start');
    
    start.addEventListener('click' , function(){
        alert('activaste el bucle');
        intervalo();
        console.log(start);
    });
}); 