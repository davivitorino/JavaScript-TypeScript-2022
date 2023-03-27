// Declaração de função (Function hoisting)
falaOi(); // função é chamada antes da declaração

function falaOi() {
    console.log('oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const MostrarDado = function() {
    console.log('sou um dado')
};

MostrarDado();

// chamando função através de outra função

function executarFuncao(funcao) {
    funcao();
}
executarFuncao(MostrarDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro do objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();

