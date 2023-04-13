// Copiando Objetos

// Objeto original

const produto = {
    nome: 'livro',
    preco: 28.99,
}

// copiando propriedades, porém alterando na memória "apontando para o mesmo local"

/*
const produtoCopia = produto; 
produto.nome = 'camisa';
produtoCopia.preco = 49.99;
console.log(produtoCopia);
*/

// copiando propriedades do objeto na memória sem alterar original

const produtoCopia2 = {...produto, paginas: 200} // spread e add dado novo
produtoCopia2.nome = 'caderno';
produtoCopia2.preco = 21.99;

//Object.assign() copia sem alterar propriedade

const produtoCopia3 = Object.assign({}, produto, {gênero:'infantil'});
produtoCopia3.nome = 'brinquedo';
produtoCopia3.preco = 35.80;

console.log(produto);
console.log(produtoCopia2);
console.log(produtoCopia3);

// "values" "keys" "entries"

console.log(Object.values(produto)); // mostra valores
console.log(Object.keys(produto)); // mostra chaves
console.log(Object.entries(produto)); // mostra chave e valor

