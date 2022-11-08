var readlineSync = require("readline-sync");
let operadorCalculadora = "Z";
function calculadoraTradicional(digito1, digito2) {
  //CALCULADORA TRADICIONAL
  let resultado = 0;
  switch (operadorCalculadora) {
    case "-":
      resultado = digito1 - digito2;
      return resultado;
    case "+":
      resultado = digito1 + digito2;
      return resultado;
    case "/":
      resultado = digito1 / digito2;
      return resultado;
    case "*":
      resultado = digito1 * digito2;
      return resultado;
  }
  return resultado;
}

function executaCalculadora() {
  console.log("\nVocê escolheu a calculadora tradicional!\n");
  operadorCalculadora = readlineSync.question(
    "Escolha a operação ideal:\n (+) Soma\t (-) Subtração\n (/) Divisão\t (*) Multiplicação\n"
  );
  if (
    operadorCalculadora == "+" ||
    operadorCalculadora == "-" ||
    operadorCalculadora == "/" ||
    operadorCalculadora == "*"
  ) {
    digito1 = 0;
    digito2 = 0;
    console.clear();
    digito1 = Number(readlineSync.question("Informe o primeiro digito:\t"));
    digito2 = Number(readlineSync.question("Informe o segundo digito:\t"));
    console.log(
      `O resultado para o cálculo solicitado é:\t ${calculadoraTradicional(
        digito1,
        digito2
      )}\n`
    );
  }
  else if (
    operadorCalculadora != "+" &&
    operadorCalculadora != "-" &&
    operadorCalculadora != "/" &&
    operadorCalculadora != "*"
  ) {
    console.clear();
    console.log("Você escolheu uma opção incorreta! Tente novamente...");
  }
}
module.exports.executaCalculadora = executaCalculadora;
