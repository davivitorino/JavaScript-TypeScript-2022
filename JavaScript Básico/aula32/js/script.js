function meuEscopo () {
    const form = document.querySelector('.form')
    let result = document.getElementById("resultado")

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
        console.log( pessoas instanceof Array ) // teste de array?
        console.log(pessoas)
        
        result.innerHTML += `<p>Nome: ${nome.value}</p>` 
        result.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`
        result.innerHTML += `<p>Peso: ${peso.value}</p>`
        result.innerHTML += `<p>Altura: ${altura.value}</p>`
    }
    
    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo()