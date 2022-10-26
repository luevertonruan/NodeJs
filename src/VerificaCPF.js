var readlineSync = require('readline-sync');
let resultado = 0;
let soma = 0;
let limite = 0;
let opcaoIniciar = "M";
/*             ---------------------
                                    VALIDADOR DE CPF */
function validaCPF(CPF, multiplicador) {
  //Gerador de CPF: https://www.4devs.com.br/gerador_de_cpf
  if (multiplicador == 11) {
    limite = 1;
    soma = 0;
  } else {
    limite = 2;
    soma = 0;
  }
  for (i = 0; i < CPF.length - limite; i++) {
    soma += CPF[i] * multiplicador;
    multiplicador -= 1;
  }
  let restoDivisao = soma % 11;
  if (restoDivisao >= 2) {
    resultado = 11 - restoDivisao;
  } else {
    resultado = 0;
  }
  return resultado;
}
function executar() {
  //              -----------------    VALIDADOR DE CPF
  console.log("Você escolheu o Validador de CPF!\n");
  let CPF = [];
  while (opcaoIniciar == "M") {
    /**/
    let i = 0;
    for (i = 0; i < 11; i++) {
      CPF[i] = readlineSync.question(`Informe o ${i + 1}º número do CPF:`);
    }
    console.log("CPF verificado:" + CPF);

    let digito1 = validaCPF(CPF, 10);
    let digito2 = validaCPF(CPF, 11);
    console.log("Primeiro digito verificador:" + digito1 + "\n");
    console.log("Segundo digito verificador:" + digito2 + "\n");
    if ((CPF[9] == digito1) & (CPF[10] == digito2)) {
      console.log("CPF válido!\n");
    } else {
      console.log("CPF inválido!\n");
    }
  }
}
executar();
