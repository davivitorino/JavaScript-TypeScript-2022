const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seg = 0;
let min = 0;
let hora = 0;

let zero_seg = 0;
let zero_min = 0;
let zero_ho = 0;

relogio.innerHTML += `${zero_ho}${hora}:${zero_min}${min}:${zero_seg}${seg}`;

// iniciando cronometro
iniciar.addEventListener('click', () => {
     
    setInterval(() => { 
        
        seg += 1;  
        
        if(seg > 12) return min += 1, seg = 0;
        
        if(min > 12) return hora += 1, seg = 0, min = 0;

        if(hora > 23) return hora = 0, zero_ho = 0;
        
        seg > 9 ? zero_seg = '' : zero_seg = 0;
        min > 9 ? zero_min = '' : zero_min = 0;
        hora > 9 ? zero_ho = '' : zero_ho = 0;
        
        relogio.innerHTML = `${zero_ho}${hora}:${zero_min}${min}:${zero_seg}${seg}`;
        
    }, 10);
    
    /*
    setTimeout(() => {
        clearInterval(timer);
    }, 2000000);
    */

});



