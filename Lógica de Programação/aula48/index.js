// estrutura de repetição "for in"

let frutas = ['uva','maça','banana','laranja'];

for (let i in frutas) {
    console.log(frutas[i]);
}

console.log('') // espaçamento

// acessando chave de objeto

const pessoa = {
    nome: 'Davi',
    sobrenome: 'Silva',
    idade: 31
};

for (let key in pessoa) {
    console.log(key, pessoa[key])
}

console.log('') // espaçamento

// estrutura de repetição "for of"

for (let valor of frutas ) {
    console.log(valor)
}

/**RESUMO**/

// for "classico" : funciona com interáveis (arrays/strings)
// for in : retorna o indice/chave (string, array, objetos)
// for of : retorna o valor (interáveis, array, string)