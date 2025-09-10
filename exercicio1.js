const leia = require ('readline-sync');

let numero1 = leia.questionInt ('Digite um número inteiro: ');
let numero2 = leia.questionInt ('Digite outro número inteiro: ');


if (numero1 >= numero2) {
    console.log("Intervalo inválido! O primeiro número deve ser menor que o segundo.");
} else {
    console.log(`Números múltiplos de 3 e 5 no intervalo de ${numero1} até ${numero2}:`);
    for (let i = numero1; i <= numero2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}
