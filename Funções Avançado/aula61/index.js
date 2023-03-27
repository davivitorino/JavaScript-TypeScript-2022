// IIFE - immediately invoked function expression
// função invocada imediatamente fora do escopo global

(function(idade, peso, altura) {

    const sobrenome = 'miranda';
    
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('luiz'));
    }

    falaNome();

    console.log(idade, peso, altura);

})(30, 80, 1.80);