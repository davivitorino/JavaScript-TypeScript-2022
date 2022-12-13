// função construtora -> objetos
// função fabrica -> objetos

// construtora -> pessoa (new)
function Pessoa(nome, sobrenome) {
    //atributos ou metodos privados "acesso interno"
    const id = 123456;

    const metodoInterno = () => {

    };
    // atributos ou metodos públicos "acesso externo"
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ':chamando metodo');
    }
}

const p1 = new Pessoa('Davi', 'Silva')

// chamando atributo
console.log(p1.nome)

// chamando metodo
p1.metodo();
