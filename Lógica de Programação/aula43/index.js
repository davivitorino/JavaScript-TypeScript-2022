// diferença entre let e var

/* let tem escopo de bloco { block }, não pode ser
recriado no contexto global
*/

const verdadeira = true;

let nome = 'davi';
var nome2 = 'vitorino';

if (verdadeira) {
    let nome = 'davi vitorino'; // no bloco, let foi recriado e nao substitui a original
    //console.log(nome, nome2);

    if (verdadeira) {
        var nome2 = 'silva'; // var foi redeclarada
        //let nome = 'luiz'
        //console.log(nome) js vai buscar nos blocos acima até encontar a variavel
    }
}

console.log(nome,nome2) // let do escopo globol e var do escopo de bloco if()

/* var tem escopo de função e pode ser redeclarado fora da função*/

var saudacao2 = 'world'; // var ao redor da função pode ser exibida dentro da função proxima

function falaOi () {
    var saudacao = 'hello';
    console.log(saudacao2)  // chamando var fora da função
}

// console.log(saudacao) nao pode ser exibido por ser escopo de função

falaOi();








