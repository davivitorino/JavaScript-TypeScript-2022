const valor = Number(window.prompt("digite um numero"))
let saida = document.getElementById('numero')
let resultado = document.getElementById('resultado')

saida.innerHTML = `${valor}`
resultado.innerHTML += `<p>raiz quadrada de ${valor} é = ${Math.sqrt(valor)}</P>`
resultado.innerHTML += `<p>o numero ${valor} é inteiro? = ${Number.isInteger(valor)}</p>`
resultado.innerHTML += `<p>é NaN? = ${isNaN(valor)}</p>`
resultado.innerHTML += `<p>arredondamento para baixo = ${Math.floor(valor)}</p>`
resultado.innerHTML += `<p>arredondamento para cima = ${Math.ceil(valor)}</p>`
resultado.innerHTML += `<p>com duas casas decimais = ${valor.toFixed(2)}</p>`





