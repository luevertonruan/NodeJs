var readlineSync = require("readline-sync");
let resultado, limite;
/*let perguntaRepete='Deseja verificar mais algum documento?'; 
var executar=executaCNPJ();*/


/*Este é o validador de CNPJ, segue a baixo link com os calculos baseados:
Validador de CNPJ: https://blog.dbins.com.br/como-funciona-a-logica-da-validacao-do-cnpj#:~:text=A%20primeira%20valida%C3%A7%C3%A3o%20%C3%A9%20multiplicar,e%202%20aparecem%20duas%20vezes.&text=Agora%20vamos%20somar%20os%20resultados%20obtidos%20por%20cada%20coluna.
*/
function validaCNPJ(CNPJ, multiplicador) {
  //Gerador de CNPJ: https://www.4devs.com.br/gerador_de_cnpj
  let soma = 0;
  let restoDivisao = 0;
  if (multiplicador == 6) {
    limite = 1;
  } else {
    limite = 2;
  }
  for (i = 0; i < CNPJ.length - limite; i++) {
    soma += CNPJ[i] * multiplicador;
    multiplicador -= 1;
    if (multiplicador < 2) {
      multiplicador = 9;
    } /**/
  }
  restoDivisao = soma % 11;
  if (restoDivisao >= 2) {
    resultado = 11 - restoDivisao;
  } else {
    resultado = 0;
  }
  return resultado;
}
function executaCNPJ() {
  //              -----------------    VALIDADOR DE DOC
  let digito1, digito2;
  let CNPJ=[];
 
  console.clear();
  console.log(`Você escolheu o Validador de CNPJ!\n`);
  /*let CNPJ = [7,2,1,6,2,6,2,8,0,0,0,1,0,2];*/
  for (i = 0; i < 14; i++) {
    CNPJ[i] = Number(
      readlineSync.question(`Informe o ${i + 1}º número do CNPJ:`)
    );
  }
  console.log(`\nCNPJ verificado: ${CNPJ}\n`);
  digito1 = validaCNPJ(CNPJ, 5);
  digito2 = validaCNPJ(CNPJ, 6);
      

  console.log(`Primeiro digito verificador: ${digito1}\n`);
  console.log(`Segundo digito verificador: ${digito2}\n`);
  if ((CNPJ[CNPJ.length - 2] == digito1) & (CNPJ[CNPJ.length - 1] == digito2)) {
    console.log(`CNPJ válido!\n`);
  } else {
    console.log(`CNPJ inválido!\n`);
  }
}
//executaCNPJ();
module.exports.executaCNPJ=executaCNPJ;
