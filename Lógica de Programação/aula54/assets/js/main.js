const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seg = 0;
let min = 0;
let hora = 0;

relogio.innerHTML += `${hora} ${min} ${seg}`;

// iniciando cronometro
iniciar.addEventListener('click', (event) => {
    
    
    let timer = setInterval(() => { 
       
        seg += 1;  

        seg > 15 ? (min+= 1) (seg = 0) : null ;

        min > 15 ? (hora+= 1) (seg = 0) (min = 0) : null ;

        relogio.innerHTML = `${hora} ${min} ${seg}`;
        
    }, 1000);
    
 
    setTimeout(() => {
        clearInterval(timer);
    }, 65000);

});



