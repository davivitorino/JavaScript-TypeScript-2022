// Array Basic Methods

const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log( numeros instanceof Array ) // testa se objeto é array
/*
numeros.unshift(0)  // adicionando no inicio do array
numeros.shift()     // remove primeiro elemento
numeros.push(11)    // adiciona na última posição do array
numeros.pop()       // remove última posição do array
*/
console.log(numeros.slice(0, -5))