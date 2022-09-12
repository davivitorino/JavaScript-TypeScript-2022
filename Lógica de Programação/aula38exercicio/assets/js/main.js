const resultado = document.querySelector("#result")

function CalculoImc() {
    let peso = document.querySelector(".peso").value;
    resultado.innerHTML = `<p>${peso}</p>`
}

