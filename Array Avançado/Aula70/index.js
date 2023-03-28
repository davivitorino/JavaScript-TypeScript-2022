// sintaxe: filter.(valor, indice, array)
// retorna um array de tamanho original ou menor

// Retorne os números maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

// filtrando nome maior que 7, idade maior que 50, nome que termina com "a"
const pessoa = [
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'leticia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
];

const nomeMaior = pessoa.filter(obj => obj.nome.length >= 7);
const maisDeCinquenta = pessoa.filter(obj => obj.idade > 50);
const terminaComA = pessoa.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomeMaior);
console.log(maisDeCinquenta);
console.log(terminaComA);