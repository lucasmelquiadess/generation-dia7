const readline = require('readline-sync');

// Vetor contendo 10 números inteiros não ordenados e não repetidos
let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let busca;

do {
    busca = parseInt(readline.question('Digite um numero para buscar: '), 10);

    if (busca === 0) {
        console.log('Encerrando o programa...');
        break; 
    }

    // Inicializar a posição como -1 (não encontrado)
    let posicao = -1;

    // Percorrer o vetor para encontrar o número
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === busca) {
            posicao = i;
            break;
        }
    }

    // Resultado
    if (posicao !== -1) {
        console.log(`O numero ${busca} foi encontrado na posição ${posicao} do vetor.`);
    } else {
        console.log('Nao foi encontrado!');
    }

} while (busca !== 0);
