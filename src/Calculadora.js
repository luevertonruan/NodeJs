let resultado = 0;

/*                                  -------------------------------  
                                                                                CALCULADORA TRADICIONAL*/
function calculadoraTradicional(digito1, digito2) {
  switch (operadorCalculadora) {
    case "-":
      resultado = digito1 - digito2;
      digito1 = 0;
      digito2 = 0;
      return resultado;
    case "+":
      resultado = (digito1 + digito2);
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

function executar() {
  var readlineSync = require("readline-sync");
  console.log("\nVocê escolheu a calculadora tradicional!\n");
  opcaoOperadorCalculadora =
    ("Escolha a operação ideal:\n (+) Soma\t (-) Subtração\n (/) Divisão\t (*) Multiplicação\n (S) Voltar ao menu principal\n");
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
    digito1 = Number (readlineSync.question("Informe o primeiro digito:\t"));
    digito2 = Number (readlineSync.question("Informe o segundo digito:\t"));
    resultado=calculadoraTradicional(digito1,digito2)

    console.log(
      `O resultado para o cálculo solicitado é:\t ${resultado}\n`
    );
    //                                                           MODELO DE REPETIÇÃO DE FUNÇÃO!
    repete = "Deseja realizar mais algum calculo?\t (S) Sim\t (N) Não\n";
    //PADRÃO REPETIÇÃO!!!
    opcaoRepete = readlineSync.question(repete);
    while (opcaoRepete != "S" && opcaoRepete != "N") {
      console.clear;
      console.log(opcaoErrada);
      opcaoRepete = readlineSync.question(repete);
    }
    if (opcaoRepete == "S" && opcaoRepete != "N") {
      console.clear;
      operadorCalculadora = readlineSync.question(opcaoOperadorCalculadora); //Adaptar
    } else if (opcaoRepete == "N") {
      console.clear;
      opcaoMenuPrincipal = readlineSync.question(menuPrincipal());
      stop;
    }
  }

  if (
    operadorCalculadora != "S" &&
    operadorCalculadora != "E" &&
    operadorCalculadora != "+" &&
    operadorCalculadora != "-" &&
    operadorCalculadora != "/" &&
    operadorCalculadora != "*"
  ) {
    console.clear;
    console.log(opcaoErrada);
    operadorCalculadora = readlineSync.question(opcaoOperadorCalculadora);
    stop;
  } /*else if (operadorCalculadora == "S") { //INSERIR NO PROGRAMA.JS
    opcaoMenuPrincipal = readlineSync.question(menuPrincipal());
    stop;
  }*/
  stop;
}
executar()