/**objetc basic**/

/*função para criar objeto

function CriaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,                              
        idade: idade
    }
}

const pessoa1 = CriaPessoa('Luiz', 'Otavio', 25)
console.log(pessoa1)

*/

const pessoa1 = {
    nome: 'davi',
    sobrenome: 'vitorino',
    idade: 31,

    fala() {
        console.log(`minha idade atual é ${this.idade}.`)
    },

    incrementarIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementarIdade()
pessoa1.fala()