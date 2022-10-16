// função para verificar se imagem é paisagem ou retrato

function checkImage(l, a ) {
    if( l > a) {
        return true;
    } else {
        return false;
    }
};

console.log(checkImage(300, 210));

let orientacao = (l,a) => { return l > a ? true : false};
console.log(orientacao(150,200));