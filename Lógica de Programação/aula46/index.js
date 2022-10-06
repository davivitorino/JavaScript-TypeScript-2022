// estrutura de repetição 'for' clássico

for (let i = 0; i <= 10; i++) {
    console.log(`linha ${i}`)
}

// incrementando de 10 em 10 '+='

for (let i = 0; i <= 10; i+= 10) {
    console.log(`linha ${i}`)
}

// decrementando '-='

for (let i = 100; i >= 10; i-= 10) {
    console.log(`linha ${i}`)
}

// utilizando em array

const frutas = ['maça', 'uva', 'pêra', 'banana'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`indice ${i}`, frutas[i]);
}




