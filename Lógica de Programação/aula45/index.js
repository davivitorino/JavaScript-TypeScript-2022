// Atribuição via desestruturação em objeto

const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua:'av brasil',
        numero: 320
    }
};

//const { nome } = pessoa;    // criando variavel como mesmo nome da chave
//console.log(nome)

const { endereco: {rua} } = pessoa; // pegando dado especifico
console.log(rua)    

const { endereco: {rua: r = 'av japao'}} = pessoa // atribuindo valor padrao caso nao encontre valor no objeto de origem
console.log(r) // resultado caso nao ache valor : 'av japao'

const { nome, ...resto} = pessoa;   // pegando resto dos dados
console.log(resto)  // chamando resto

