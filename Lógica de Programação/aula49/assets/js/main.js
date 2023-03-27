// exercicio NodeList, mudando a cor via JavaScript

const paragrafo = document.querySelectorAll('p');

const estilobody = getComputedStyle(document.body); // pega os estilos disponiveis/aplicados ao html 
const backgroundColorBody = estilobody.backgroundColor; // pegando a propriedade 'backgroundcolor'
console.log(backgroundColorBody); // chamando no browser

// aplicando as configurações via JS
for (let p of paragrafo) {
    p.style.backgroundColor = "#175666";
    p.style.color = "#ffffff";
}
