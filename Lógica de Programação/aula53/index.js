// função setInterval

/*
function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {       // pegando hora local
        hour12: false                               // definindo 24h
    });
};
*/
// setInterval executa o bloco infinitamente definido pelo tempo

let cont = 0

let timer = setInterval(() => {   // setInterval: definindo intervalo
    // console.log(mostrarHora());   chamando a função a cada 1seg.
    cont += 1;
    console.log(cont)
}, 1000);

// setTimeout executa o bloco finitamente definido pelo tempo

setTimeout(() => {
    clearInterval(timer);
}, 10000);
/*
setTimeout(() => {
    console.log('ola mundo!');
}, 5000);
*/
