// return
// retorna valor
// termina a função

// return dentro de outra function

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('mundo');
console.log(resto);

// multiplicando valores

function criaMultiplicador(multiplicador) {
    return function(n) {                        // criando uma função e chamando direto
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(1));
console.log(triplica(2));
console.log(quadriplica(3));
