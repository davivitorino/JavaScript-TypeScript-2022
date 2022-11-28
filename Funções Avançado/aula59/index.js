// Closures

/*  Closures é basicamente a capacidade de uma funcao ter uma outra funcao
    e essa funcao ter a capacidade de acessar o escopo lexico e retorna dentro dessa funcao
    alguma coisa que esteja no escopo lexico.
*/

/*  Escopo léxico é simplesmente a maneira que a função usa para resolver nomes de variáveis
 em funções aninhadas... As funções mais internas, contém também o escopo das funções mais externas...
*/

function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('luiz');
const funcao2 = retornaFuncao('otavio');
console.dir(funcao);
console.dir(funcao2);