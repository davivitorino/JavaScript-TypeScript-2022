function addZero (num) {
    return num >= 10 ? num : `0${num}` // função para adicionar zero a esquerda no resultado do formato da hora 
}

function formataData(data) {
    const dia = addZero(data.getDate());
    const mes = addZero(data.getMonth() + 1);   // + 1 para deixar meses em ordem a partir do 1 até 12
    const ano = addZero(data.getFullYear());
    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    const seg = addZero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);