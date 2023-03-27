/*operador ternário*/

// ()condição ? 'valor verdadeiro' : 'valor falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuário vip' : 'usuário normal';

// definindo valor na variavel

const corUsuario = null;                        // cor usuário 'vazio'
const corPadrao = corUsuario || 'preta'         // definição do usuário

console.log(corPadrao)
console.log(nivelUsuario)