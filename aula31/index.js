// objetc basic

function CriaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,                               // função para criar objeto
        idade: idade
    }
}

const pessoa1 = CriaPessoa('Luiz', 'Otavio', 25)
console.log(pessoa1)