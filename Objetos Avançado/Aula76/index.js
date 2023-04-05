// Getter e Setter

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    // configurando propriedades de um objeto com "defineProperty"
    // configurando Getter e Setter

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function() {   // "get" retorna valor quando chamado
            return estoquePrivado ;
        },

        set: function(valor) {  // "set" adiciona valor via "=" com nome do atributo
            if(typeof valor !== 'number') {
                throw new TypeError('is not a number!');
            }    

            estoquePrivado = valor;
        }        
    });
}

const p1 = new Produto('camiseta', 20, 10);
//console.log(p1);
p1.estoque = 100; // add valor via "set"
console.log(p1.estoque);    // exibe valor do "get"

// utilizando factory function com "getter" e "setter"

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p2 = criaProduto('celular');
p2.nome = 'notebook';
console.log(p2.nome);