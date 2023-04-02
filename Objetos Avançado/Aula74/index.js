// revisão Objetos

// Objeto Literal

const Produto = {
    marca: 'motorola',
    modelo: 'moto g',
    preco: 1000
};

// acessando por colchetes dinamicamente

const chave = 'marca';
console.log(Produto[chave])

// acessando por notação ponto

console.log(Produto.modelo)

// acessando chaves do objeto com 'for in'

for (let chave in Produto) {
    console.log(chave);
}

// acessando valores

for (let chave in Produto) {
    console.log(Produto[chave]);
}

// criando por 'new Object()'

const estoque = new Object();
estoque.Produto = 'bolsa';
estoque.quantidade = 50;
estoque.cor = 'cinza'


delete estoque.cor      // apagando elemento
console.log(estoque)

// criando objetos por função
// Factory functions

function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoaDados = criaPessoa('Davi', 'Vitorino');
console.log(pessoaDados.nomeCompleto());

// Constructor functions

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze() "trava o elemento para não modificar"
}

const loginDados1 = new Pessoa('luiz', 'Miranda');
console.log(loginDados1);   // retornando Objeto Literal
