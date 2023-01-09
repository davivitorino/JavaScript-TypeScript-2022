// Revisão Array

// criação literal
const nomes = ['davi','vitorino','silva'];
console.log(nomes);

// criando com construtor "new"
const numeros = new Array (1,2,3,4,5);
console.log(numeros);

// alterando valor no índice
nomes[1] = 'da';
console.log(nomes);

// deletando valores
delete numeros[4];
console.log(numeros);

// removendo índices
const frutas = ['banana','maçã','laranja']
const removido = frutas.shift(); // removendo e salvando
console.log(frutas, removido);

// convertendo string em array
const nome = 'davi vitorino silva';
const nomeArray = nome.split(' '); // separando por "split"
console.log(nomeArray);

// juntando novamente
const nomeString = nomeArray.join(' ') // juntando com "join"
console.log(nomeString);



