// factory function

/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('conta inválida');
                return
            }
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
          this.display.value += valor;  
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/

// constrution fuction

function calculadora() {
// acumulador
    let numeros = []
    
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    }
// somente adição
    this.realizaConta = () => {
        let resultado = numeros[0] + Number(this.display.value);
        this.clearDisplay();
        this.btnParaDisplay(Number(resultado));
        numeros = []
    }
    
    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }
            
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            
            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            }
            
            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
            
            if(el.classList.contains('btn-adc')) {
                numeros.push(Number(this.display.value));
                this.clearDisplay();
            }

            this.display.focus();
        });
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;  
    }
}

const calc = new calculadora()

calc.inicia();