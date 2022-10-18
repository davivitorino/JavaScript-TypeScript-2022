// tratamento de erro javascript
// try and catch


function soma(x, y) {
    if(  typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y is not number!')              // throw --> lança erro
    }
    return x + y;
};

try {                                                        // try --> captura e testa execução
    //console.log(soma(1, 2));
    console.log(soma("1", 2));                               // se tiver erro, lança no catch
} catch(error) {
    console.log(error)                                       // catch --> exibe mensagem de erro
}