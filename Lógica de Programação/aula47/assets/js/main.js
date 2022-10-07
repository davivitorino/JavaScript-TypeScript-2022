
const elementos = [{tag:"p", texto:'frase1'},{tag:"div", texto:'frase2'}]

for(let i =0; i < elementos.length; i++) {
    let element = document.createElement(elementos[i].tag);
    element.innerHTML = `${elementos[i].texto}`;
    document.querySelector(".container").appendChild(element);
}



