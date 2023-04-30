// Produto -> aumento, desconto
// Camiseta -> cor
// Caneca -> material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// **camiseta**

function Camiseta(nome, preco, cor) {
    Produto.call(this,nome,preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //link prototype de produto
Camiseta.prototype.constructor = Camiseta; //definindo construtor

// **caneca**

function Caneca(nome, preco, material) {
    Produto.call(this,nome,preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// **criando e chamando os produtos**

const produto = new Produto('generico', 00);

const camiseta = new Camiseta('Regata', 49, 'vermelha');
camiseta.aumento(10);
console.log(camiseta);

const caneca = new Caneca('caneca', 30, 'porcelana');
caneca.desconto(5);
console.log(caneca);

console.log(produto);
