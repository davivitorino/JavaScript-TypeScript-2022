function meuEscopo () {
    const form = document.querySelector('.form')
    
    function recebeEventoForm (evento) {
        evento.preventDefault()
        console.log('nao enviado!')
    }
    
    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()