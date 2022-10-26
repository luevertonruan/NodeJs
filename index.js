var readline = require("readline-sync");
let resultado = 0;
let soma = 0;
let limite = 0;
let operadorCalculadora = "Z";

/*                     --- -----------------
                                                        MENU PRINCIPAL*/
function menuPrincipal() {
  listaOpcao =
    "\n>>> CALCULADORA MULTIFUNCIONAL <<<\n" +
    "A - Calculadora tradicional\n" +
    "B - Validador de CPF\n" +
    "C - Validador de CPNJ\n" +
    "D - Gerador de Matriz Transposta\n" +
    "E - Quero sair!\n";
  return listaOpcao;
}
/*                      --------------------
                                                        VERIFICADOR DE CPF */
function validaCPF(CPF, multiplicador) {
  //Gerador de CPF: https://www.4devs.com.br/gerador_de_cpf
  //087.602.791-55

  //laço pra calcular os digitos base do CPF
  if (multiplicador == 11) {
    limite = 1;
    soma = 0;
  } else {
    limite = 2;
    soma = 0;
  }
  for (i = 0; i < CPF.lenght - limite; i++) {
    soma += CPF[i] * multiplicador;
    multiplicador -= 1;
  }
  restoDivisao = soma % 11;
  if (restoDivisao >= 2) {
    resultado = 11 - restoDivisao;
  } else {
    resultado = 0;
  }
  return resultado;
}

function executar() {
  let digito1 = 0;
  let digito2 = 0;
  let opcaoMenuPrincipal = "Z";
  let opcaoRepete = "Z";
  let repete = "zzz";
  let opcaoIniciar = "M";
  let opcaoErrada = "Você escolheu uma opção incorreta!\n";

  opcaoMenuPrincipal = parseCaracter(readline.question(menuPrincipal()));

  while (opcaoMenuPrincipal != "E") {
    switch (opcaoMenuPrincipal) {
      case "B":
        console.clear();
        console.log("Você escolheu o Validador de CPF!\n");
        while (opcaoIniciar == "M") {
          let CPF=[];
          for (i = 0; i < 11; i++) {
            CPF[i] = parseInt(
              readline.question("Informe o " + (i + 1) + "º número do CPF:\n")
            );
          }
          // verificador(CPF, multiplicador)
          digito1 = validaCPF(CPF, 10);
          digito2 = validaCPF(CPF, 11);

          console.log("Primeiro digito verificador: " + digito1 + "\n");
          console.log("Segundo digito verificador: " + digito2 + "\n");

          if (CPF[9] == digito1 && CPF[10] == digito2) {
            console.log("CPF válido!\n");
          } else {
            console.log("CPF inválido!\n");
          }
          repete = "Deseja verificar mais algum CPF?\t (S) Sim\t (N) Não\n";
          //PADRÃO DE REPETIÇÃO!!!
          opcaoRepete = parseCaracter(readline.question(repete));
          while (opcaoRepete != "S" && opcaoRepete != "N") {
            console.clear();
            console.log(opcaoErrada);
            opcaoRepete = parseCaracter(readline.question(repete));
          }
          if (opcaoRepete == "S" && opcaoRepete != "N") {
            console.clear();
            opcaoIniciar = "M"; //Adaptar
          } else if (opcaoRepete == "N") {
            console.clear();
            opcaoMenuPrincipal = parseCaracter(
              readline.question(menuPrincipal())
            );
            break;
          }
        }
        break;
      default:
        console.clear();
        console.log(opcaoErrada + "Tente novamente...\n");
        opcaoMenuPrincipal = parseCaracter(readline.question(menuPrincipal()));
        break;
    }
  }

}
executar();
