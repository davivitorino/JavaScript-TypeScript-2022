let saida = document.querySelector('.container');

function DiadaSemana() {
    const data = new Date();
    let diaAtual = data.getDay();
    let diaSemanaTexto;

switch (diaAtual) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sabádo';
        break;
    default:
        diaSemanaTexto = '';
        break;    
}

return diaSemanaTexto

}

function Dia() {
    const data = new Date();
    let diaAtual = data.getDate();
    return diaAtual  
}

function Mes() {
    const data = new Date();
    let MesAtual = data.getMonth() + 1;
    let mesAtualTexto;
    
    switch (MesAtual) {
        case 1:
            mesAtualTexto = 'Janeiro';
            break;
        case 2:
            mesAtualTexto = 'Fevereiro';
            break;
        case 3:
            mesAtualTexto = 'Março';
            break;
        case 4:
            mesAtualTexto = 'Abril';
            break;
        case 5:
            mesAtualTexto = 'Maio';
            break;
        case 6:
            mesAtualTexto = 'Junho';
            break;
        case 7:
            mesAtualTexto = 'Julho';
            break;
        case 8:
            mesAtualTexto = 'Agosto';
            break;
        case 9:
            mesAtualTexto = 'Setembro';
            break;
        case 10:
            mesAtualTexto = 'Outubro';
            break;
        case 11:
            mesAtualTexto = 'Novembro';
            break;
        case 12:
            mesAtualTexto = 'Dezembro';
            break;
        default:
            mesAtualTexto = '';
            break;    
    }
    
    return mesAtualTexto
}

function Ano() {
    let data = new Date();
    let AnoAtual = data.getFullYear();
    return AnoAtual;
}

function Hora() {
    const Horas = new Date().toLocaleTimeString();
    return Horas;
}

function teste() {
    let ds = DiadaSemana();
    let d = Dia();
    let m = Mes();
    let a = Ano();
    let h = Hora();
    saida.innerHTML = `${ds}, ${d} de ${m} de ${a} ${h} `
}

teste();
