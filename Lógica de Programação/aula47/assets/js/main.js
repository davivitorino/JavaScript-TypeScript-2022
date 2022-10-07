let section = document.querySelector(".container");

const elementos = [{tag:"p", texto:'frase1'},{tag:"div", texto:'frase2'}]

for(let i =0; i < elementos.length; i++) {
    section = document.createElement(elementos[i].tag);
    section.innerHTML = `${elementos[i].texto}`;
    document.body.appendChild(section);
}



