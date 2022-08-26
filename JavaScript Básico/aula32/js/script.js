function meuEscopo () {
    const form = document.querySelector('.form')

    const pessoas = []
    
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        var cadastro = new Object
            cadastro[0] = nome.value
            cadastro[1] = sobrenome.value
            cadastro[2] = peso.value
            cadastro[3] = altura.value
        
        pessoas.push(cadastro)
        console.log(pessoas)
    }
    
    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo()