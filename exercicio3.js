const leia = require ('readline-sync');

let idade;
let menor = 0;
let maior = 0;

idade = leia.questionInt ('Digite sua idade: ');

while (idade >= 0) {
    if (idade < 21) {
        menor++;
    } else if (idade > 50) {
        maior++;
    }
    idade = leia.questionInt('Digite a proxima idade: ');
}

console.log('Total de pessoas com menos de 21 anos: ' + menor);
console.log('Total de pessoas com mais de 50 anos: ' + maior);
