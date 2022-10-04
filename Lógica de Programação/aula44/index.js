// atribuição via desestruturação

/*
let a = 'A';    // B
let b = 'B';    // C
let c = 'C';    // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)
*/

// ...rest and ...spread (resto e espalhar)
const numbers = [1000, 2000, 3000, 4000, 5000];
const [first,second, ...rest] = numbers;
console.log(first,second)
console.log(rest)

const numeros = [[1,2,3],[4,5,6],[7,8,9]]; 
console.log(numeros[1][2]); // buscando valor 6 [indice=1], [indice=2]
// adicionando nome aos indices buscando valor 9
const [lista1, lista2, lista3] = numeros; //nomeando
console.log(lista3[2]) //acesso por nome e indice
