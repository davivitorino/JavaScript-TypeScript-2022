// defineProperty e defineProperties
// definindo propriedades privadas dos objetos

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;

    // configurando propriedades de um objeto com "defineProperty"

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    // configurando propriedades de vários objetos "defineProperties"

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável 
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável 
        },
    });
}

const p1 = new Produto('celular', 1500, 10);
console.log(Object.keys(p1)); // mostrando chave obj

console.log(p1) // observando objeto literal

for(let chave in p1) {
    console.log(chave); // chave via "for in"
}