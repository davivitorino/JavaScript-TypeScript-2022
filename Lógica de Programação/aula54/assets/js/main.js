const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


let seg = "00";
let min = "00";
let hora = "00";

relogio.innerHTML += `${hora}:`;
relogio.innerHTML += `${min}:`;
relogio.innerHTML += `${seg}`;


// iniciando cronometro
iniciar.addEventListener('click', (event) => {
    console.log(Number(seg).toFixed(2));
});