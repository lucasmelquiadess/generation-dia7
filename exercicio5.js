const leia = require ('readline-sync');

let soma = 0;
let numero;

do {
    numero = leia.questionInt (('Digite um número inteiro: '), 10);

    if (numero > 0) {
        soma += numero;
    }

} while (numero !== 0);

console.log ('A soma dos números positivos digitados é: ' + soma);
