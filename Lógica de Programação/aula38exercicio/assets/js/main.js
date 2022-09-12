const resultado = document.querySelector("#result")

document.querySelector(".altura").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
 });


function CalculoImc() {
    
    let altura = document.querySelector(".altura").value;
    let peso = document.querySelector(".peso").value;
    let imc = peso/(altura**2)

    if(peso === '') {
        resultado.innerHTML = `<p style="background-color:red;color:white;text-align:center;"> Peso inválido</p>` 
    } else if(altura === '') {
        resultado.innerHTML = `<p style="background-color:red;color:white;text-align:center;"> Altura inválida</p>`
    } else if(imc < 18.5) {
        resultado.innerHTML = `<p style="background-color:green;color:white;text-align:center;">Seu IMC é:  ${imc.toFixed(2)},   Abaixo do Peso!</p>`     
    } else if(imc > 18.5 && imc < 24.9){
        resultado.innerHTML = `<p style="background-color:green;color:white;text-align:center;">Seu IMC é:  ${imc.toFixed(2)},   Peso Normal!</p>`
    } else if(imc > 25 && imc < 29.9){
        resultado.innerHTML = `<p style="background-color:green;color:white;text-align:center;">Seu IMC é:  ${imc.toFixed(2)},  Sobrepeso!</p>`    
    } else if(imc > 30 && imc < 34.9){
        resultado.innerHTML = `<p style="background-color:green;color:white;text-align:center;">Seu IMC é:  ${imc.toFixed(2)},  Obesidade grau 1!</p>`
    } else if(imc > 35 && imc < 39.9){
        resultado.innerHTML = `<p style="background-color:green;color:white;text-align:center;">Seu IMC é:  ${imc.toFixed(2)},  Obesidade grau 2!</p>`
    } else if(imc > 40){
        resultado.innerHTML = `<p style="background-color:green;color:white;text-align:center;">Seu IMC é:  ${imc.toFixed(2)},  Obesidade grau 3!</p>`
    }

}

