// funções geradoras

function* geradora1() {
    // bloco de codigo
    yield 'valor 1'
    // bloco de codigo
    yield 'valor 2'
    // bloco de codigo
    yield 'valor 3'

}

// chamando a função geradora
const g1 = geradora1();
console.log(g1.next().value); // chamando primeiro valor
console.log(g1.next().value); // chamando segundo valor
console.log(g1.next().value); // chamando terceiro valor
console.log(g1.next().done); // vendo se acabou "true"


// geradora chamando outra

function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2();     // yield* chamando função
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora3();
for(let valor of g4) {
    console.log(valor);
}


//

function* geradora4() {
    yield function() {
        console.log('yield 1');
    };

    return function() {
        console.log('do return...') // return anula o proximo yield
    };

    yield function() {
        console.log('yield 2'); 
    };
}

const g5 = geradora4();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();



