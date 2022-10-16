// função que recebe 2 numeros e retorna o maior valor

// variáveis
let num1 = 3;
let num2 = 2;
let num3 = [2,5,7,3,9];

// retorna maior if / else
function retornaMaior(n1,n2) {

    if(n1 > n2) {
        return console.log(n1);
    } else {
        return console.log(n2);
    }

};

retornaMaior(num1,num2);

// retorna maior valor array
function retornaMaiorvetor(vetor) {

   let max = vetor.reduce( (a, b) => {
        return Math.max(a,b);
   });

   console.log(max)

}

retornaMaiorvetor(num3)

// retorna maior valor com operador ternario
let maior = num1 > num2 ? `${num1}` : `${num2}`
console.log(maior)


