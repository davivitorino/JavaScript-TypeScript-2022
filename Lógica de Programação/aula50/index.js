// while e do while

// while
/*verifica a condição e depois executa a ação/bloco de código */

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while(rand !== 10) {
    rand = random(min, max); 
    console.log(rand);
}

console.log("") // espaçamento

// do while
/*executa bloco de código primeiro e depois verifica condição */

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);