// retorne a soma do dobro de todos os pares utilizando "filter","map","reduce"
// filtrar pares
// dobrar os valores
// reduzir (somar tudo)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);

// forEach -> para iteração no array

const a1 = [10,20,30];
let total = 0;

a1.forEach(valor=> { total += valor});
console.log(total);
