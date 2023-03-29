// reduce
// reduzindo valor, soma total dos valores

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador
}, 0);
console.log(total)

// verificando maior idade por Reduce

const pessoa = [
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'leticia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
];

const maisvelha = pessoa.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisvelha);