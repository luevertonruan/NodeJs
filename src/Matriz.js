var readlineSync = require("readline-sync");
let opcaoIniciar = "M";

//                                        GERADOR DE MATRIZ TRANSPOSTA - SEM FUNÇÃO CORRESPONDENTE
console.clear;
console.log("Você escolheu o Gerador de Matriz Transposta!\n");

/*while (opcaoIniciar == "M") {}*/
let c, l;
let matrizO = [[], []];
for (l = 0; l < 2; l++) {
  for (c = 0; c < 3; c++) {
    matrizO[[l][c]] = Number(
      readlineSync.question(
        `Informe o ${c + 1}º número para a ${l + 1}ª linha:\n`
      )
    );
  }
  console.log("\n");
}

console.log("A matriz original informada é:\n");
for (l = 0; l < 2; l++) {
  for (c = 0; c < 3; c++) {
    console.log(matrizO[[l][c]]);
  }
  console.log("\n");
}

console.log("\nMatriz transposta:\n");
console.log("A matriz transposta correspondente é:\n");
let matrizT = [[], []];
for (l = 0; l < 3; l++) {
  for (c = 0; c < 2; c++) {
    matrizT[[l][c]] = matrizO[[c][l]];
    console.log(matrizT[[l][c]]);
  }
  console.log("\n");
}
