// estrutura de repetição IF / ELSE

const dataAtual = new Date
const horaAtual = dataAtual.getHours()

if(horaAtual >=24 && horaAtual <=11) {
    console.log('bom dia!')
} else if(horaAtual >=12 && horaAtual <=17) {
    console.log('boa tarde!')
} else if(horaAtual >=18 && horaAtual <=23) {
    console.log('boa noite!')
} else {
    console.log('erro na horas!')
}