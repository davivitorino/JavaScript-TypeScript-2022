//alert,confirm,prompt

/*

alert('hello') // exibido somente no navegador window.alert()
window.confirm('do you would like close this window?') // pop up de confirmação retorna true ou false
window.prompt('what´s your name?') // poup up de entrada

*/

// exercicio - soma de dois valores -

let num1 = window.prompt('digite um valor?')
let num2 = window.prompt('digite outro valor?')

num1 = Number(num1)
num2 = Number(num2)

let resultado = num1 + num2

alert(`o resultado é ${resultado}`)


