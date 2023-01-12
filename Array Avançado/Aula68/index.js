// splice(indice, delete, add1, add2....)

const numeros = [1,2,3,4,5];

const removido = numeros.splice(1, 1); // removendo do indice 4, 1 elemento = 5

const removido2 = numeros.splice(-1, 1); // pode-se usar indice negativo da direita pra esquerda -1,-2,-3....

numeros.splice(4, 0, 6) // adicionando no indice 4, valor = 6

console.log(numeros,removido,removido2) // item removido irá para um array
