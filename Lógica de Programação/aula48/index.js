// estrutura de repetição "for in"

let frutas = ['uva','maça','banana','laranja'];

for (let i in frutas) {
    console.log(frutas[i]);
}

// acessando chave de objeto

const pessoa = {
    nome: 'Davi',
    sobrenome: 'Silva',
    idade: 31
};

for (let key in pessoa) {
    console.log(key, pessoa[key])
}