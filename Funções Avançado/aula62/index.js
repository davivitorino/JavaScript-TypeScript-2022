// factory function (função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        get imc() { // Getter converte function em atributo
            const valorIMC = this.peso / (this.altura ** 2);
            return valorIMC.toFixed(2);
        },
// setter permite adicionar novos atributos
        set nomeCompleto(dados) { // setter
            dados = dados.split(' ');
            this.nome = dados.shift();
            this.sobrenome = dados.join(' ');
        },

        fala() {
            return `${this.nome} ${this.sobrenome} está com imc de: ${this.imc}`
        }
    };
};

const p1 = criaPessoa('davi', 'silva', 1.7, 75);

// chamando imc como atributo e não como função, usando "get"
 console.log(p1.imc)

// utilizando setter para modificar atributo
p1.nomeCompleto = 'Maria Oliveira Silva'

const p2 = criaPessoa('joão', 'carlos', 1.8, 90);
console.log(p1.fala());
console.log(p2.fala());