var readlineSync = require("readline-sync");
let resultado, limite;
/*let perguntaRepete='Deseja verificar mais algum documento?'; 
var executar=executaDOC();*/


/*Este é o validador de CPF e CNPJ, segue a baixo links com os calculos baseados:
Validador de CPF: https://www.calculadorafacil.com.br/computacao/validar-cpf
Validador de CNPJ: https://blog.dbins.com.br/como-funciona-a-logica-da-validacao-do-cnpj#:~:text=A%20primeira%20valida%C3%A7%C3%A3o%20%C3%A9%20multiplicar,e%202%20aparecem%20duas%20vezes.&text=Agora%20vamos%20somar%20os%20resultados%20obtidos%20por%20cada%20coluna.
 
Ao enxergar um padrão nos cálculos de verificação, uni os algoritmos de verificação em um. Ao longo do código
 irei explicar onde começa as particularidade do calculo de validação de CPNJ se comparado à validação de CPF:
*/
function validaCPF(CPF, multiplicador) {
  //Gerador de CPF: https://www.4devs.com.br/gerador_de_cpf
  //Gerador de CNPJ: https://www.4devs.com.br/gerador_de_cnpj
  let soma = 0;
  let restoDivisao = 0;
  if (multiplicador == 11) {
    limite = 1;
  } else {
    limite = 2;
  }
  for (i = 0; i < CPF.length - limite; i++) {
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
function executaCPF() {
  //              -----------------    VALIDADOR DE CPF 
  let digito1, digito2;
  let CPF=[];
  
  console.clear();
  console.log(`Você escolheu o Validador de CPF!\n`);
  /*let CPF = [0, 9, 0, 5, 2, 2, 0, 4, 9, 8, 5];
  while (opcaoIniciar == "M") {}*/
  for (i = 0; i < 11; i++) {
    CPF[i] = Number(
      readlineSync.question(`Informe o ${i + 1}º número do CPF:`)
    );
  }
  console.log(`\nCPF verificado: ${CPF}\n`);
    //variável= validaCPF("documento escolhido para validação; Array DOC; variável "multiplicador"");
      digito1 = validaCPF(CPF, 10);
      digito2 = validaCPF(CPF, 11);

  console.log(`Primeiro digito verificador: ${digito1}\n`);
  console.log(`Segundo digito verificador: ${digito2}\n`);
  if ((CPF[CPF.length - 2] == digito1) & (CPF[CPF.length - 1] == digito2)) {
    console.log(`CPF válido!\n`);
  } else {
    console.log(`CPF inválido!\n`);
  }
}
//executaCPF();
module.exports.executaCPF=executaCPF;