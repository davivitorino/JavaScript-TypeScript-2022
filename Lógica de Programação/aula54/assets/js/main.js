//const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


let seg = 0;
let min = 0;
let hora = 0;

// iniciando cronometro
iniciar.addEventListener('click', (event) => {
   
    let timer = setInterval(() => { 
        seg += 1;
        let sec = document.querySelector('.relogio')
        sec.innerHTML = `${seg}`
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
    }, 10000);



});

