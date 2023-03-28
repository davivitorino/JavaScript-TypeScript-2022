// map
// sintaxe: map.(valor, indice, array)
// não altera o array original, mas modifica em uma cópia

//retornando o dobro dos valores no original
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// modificando objetos
const pessoa = [
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'leticia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
];

// retornando nomes do obj
const nomes = pessoa.map((obj) => obj.nome);
// retornando idades do obj
const idades = pessoa.map(obj => ({idade: obj.idade}));
// adicionando id ao obj sem alterar o original
const addId = pessoa.map((obj,indice)=>{
    const newObj = {...obj}                 // criando uma cópia do array original
    newObj.id = indice;                   
    return newObj;
});

console.log(addId);
console.log(pessoa)
