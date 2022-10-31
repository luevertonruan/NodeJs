var readlineSync = require("readline-sync");
let opcaoErrada='Você escolheu uma opção incorreta!\n';
function repete(){                                                                //PADRÃO REPETIÇÃO!!!
  let opcaoRepete='Z';
  while(opcaoRepete!='S' && opcaoRepete!='N'){
  opcaoRepete=readlineSync.question('Deseja realizar mais algum calculo?\t (S) Sim\t (N) Não\n');
    switch (opcaoRepete){
    case 'S':
      console.clear();
      executaCalculadora();
      break
    case 'N':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log(opcaoErrada);
      continue
    }
    break
  }
}
function calculadoraTradicional(digito1, digito2) {                           //CALCULADORA TRADICIONAL
  let resultado = 0;
  switch (operadorCalculadora) {
    case "-":
      resultado = digito1 - digito2;
      digito1 = 0;
      digito2 = 0;
      return resultado;
    case "+":
      resultado = digito1 + digito2;
      digito1 = 0;
      digito2 = 0;
      return resultado;
    case "/":
      resultado = digito1 / digito2;
      digito1 = 0;
      digito2 = 0;
      return resultado;
    case "*":
      resultado = digito1 * digito2;
      digito1 = 0;
      digito2 = 0;
      return resultado;
  }
  return resultado;
}

function executaCalculadora() {
  console.log("\nVocê escolheu a calculadora tradicional!\n");
  opcaoOperadorCalculadora =
    "Escolha a operação ideal:\n (+) Soma\t (-) Subtração\n (/) Divisão\t (*) Multiplicação\n" /*(S) Voltar ao menu principal\n*/;
  operadorCalculadora = readlineSync.question(opcaoOperadorCalculadora);

  while (
    operadorCalculadora == "+" ||
    operadorCalculadora == "-" ||
    operadorCalculadora == "/" ||
    operadorCalculadora == "*"
  ) {
    console.clear;
    digito1 = 0;
    digito2 = 0;
    digito1 = Number(readlineSync.question("Informe o primeiro digito:\t"));
    digito2 = Number(readlineSync.question("Informe o segundo digito:\t"));
    resultado = calculadoraTradicional(digito1, digito2);

    console.log(`O resultado para o cálculo solicitado é:\t ${resultado}\n`);
    repete()
  }

  if(
    operadorCalculadora != "+" &&
    operadorCalculadora != "-" &&
    operadorCalculadora != "/" &&
    operadorCalculadora != "*"
  ) {
    console.clear();
    console.log(opcaoErrada);
    executaCalculadora();
  } 
  
}
executaCalculadora();
