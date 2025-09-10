const readline = require("readline-sync");

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let elementosDiagonalPrincipal = "";
let elementosDiagonalSecundaria = "";
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

// Loop para percorrer as linhas da matriz
for (let i = 0; i < 3; i++) {
    // Loop para percorrer as colunas da matriz
    for (let j = 0; j < 3; j++) {

        // Condição para encontrar elementos da Diagonal Principal (índice da linha == índice da coluna)
        if (i === j) {
            elementosDiagonalPrincipal += matriz[i][j] + " ";
            somaDiagonalPrincipal += matriz[i][j];
        }

        // Condição para encontrar elementos da Diagonal Secundária (índice da linha + índice da coluna == tamanho da matriz - 1)
        if (i + j === 2) {
            elementosDiagonalSecundaria += matriz[i][j] + " ";
            somaDiagonalSecundaria += matriz[i][j];
        }
    }
}

console.log("Elementos da Diagonal Principal:");
console.log(elementosDiagonalPrincipal.trim()); 
// .trim() remove o espaço extra no final

console.log("\nElementos da Diagonal Secundária:");
console.log(elementosDiagonalSecundaria.trim());

console.log("\nSoma dos Elementos da Diagonal Principal:");
console.log(somaDiagonalPrincipal);

console.log("\nSoma dos Elementos da Diagonal Secundária:");
console.log(somaDiagonalSecundaria);
