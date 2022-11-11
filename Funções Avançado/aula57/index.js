// function possui "arguments" espécie de memória
// para armazenar argumentos enviados a função sem paramêtro definido

function funcao() {     // escopo sem declaração de paramêtro
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total)
}

funcao(1,2,3,4,5)

// definindo valor padrão em argumento

function funcao2(a, b = 2, c = 4) { // valor padrão no paramêtro assume caso não seja passado via argumento
    console.log(a + b + c);
}

funcao2(2, undefined, 10) // "undefined" anula valor passado via argumento == 0