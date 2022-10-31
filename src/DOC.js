var readlineSync = require("readline-sync");
let resultado, limite;
let perguntaRepete='Deseja verificar mais algum documento?'; 
var executar=executaDOC();


/*Este é o validador de CPF e CNPJ, segue a baixo links com os calculos baseados:
Validador de CPF: https://www.calculadorafacil.com.br/computacao/validar-cpf
Validador de CNPJ: https://blog.dbins.com.br/como-funciona-a-logica-da-validacao-do-cnpj#:~:text=A%20primeira%20valida%C3%A7%C3%A3o%20%C3%A9%20multiplicar,e%202%20aparecem%20duas%20vezes.&text=Agora%20vamos%20somar%20os%20resultados%20obtidos%20por%20cada%20coluna.
 
Ao enxergar um padrão nos cálculos de verificação, uni os algoritmos de verificação em um. Ao longo do código
 irei explicar onde começa as particularidade do calculo de validação de CPNJ se comparado à validação de CPF:
*/
function validaDOC(nomeDOC, DOC, multiplicador) {
  //Gerador de CPF: https://www.4devs.com.br/gerador_de_cpf
  //Gerador de CNPJ: https://www.4devs.com.br/gerador_de_cnpj
  let soma = 0;
  let restoDivisao = 0;
  if (multiplicador == 11 || multiplicador == 6) {
    limite = 1;
  } else {
    limite = 2;
  }
  for (i = 0; i < DOC.length - limite; i++) {
    soma += DOC[i] * multiplicador;
    multiplicador -= 1;
    /*Esta condicional somente será executada quando o documento validado for um CNPJ.
    É neste ponto expecífico que há uma divergência no cálculo de validação dos documentos, pois somente
     na validação de um CNPJ o valor da variável "multiplicador" precisa ser alterada durante o processo.
     Ou seja, quando o valor da variável "multiplicador" atingir o valor 1 deverá ser atribuído o valor 9 em seu lugar.*/
    if (nomeDOC == "CNPJ" && multiplicador < 2) {
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
function executaDOC() {
  //              -----------------    VALIDADOR DE DOC
  let digito1, digito2;
  let DOC=[];
  let nomeDOC="Z";
  let tamanho;
  while(nomeDOC!='A' && nomeDOC!='B'){
    nomeDOC=readlineSync.question("Qual documento gostaria de validar?\n(A) CPF\t (B) CNPJ\n");
    switch (nomeDOC){
    case 'A':
      /*Aqui é definido o valor das variáveis "nomeDOC" e "tamanho". 
      A variável "nomeDOC" tem a função de diferenciação do documento validado (mostra se estamos validando 
        um CPF ou um CNPJ), já a variável "tamanho" é útil para definirmos o tamanho da array "DOC"(uma vez
         que ainda não é possível utilizar um "DOC.lenght").*/
      nomeDOC='CPF'
      tamanho=11
      break
    case 'B':
      nomeDOC='CNPJ'
      tamanho=14
      break
    default:
      console.clear();
      console.log('Você escolheu uma opção incorreta!\n')
      continue
    }
    break
  }
  
  console.clear();
  console.log(`Você escolheu o Validador de ${nomeDOC}!\n`);
  /*let DOC = [0, 9, 0, 5, 2, 2, 0, 4, 9, 8, 5];
  while (opcaoIniciar == "M") {}*/
  let i = 0;
  for (i = 0; i < tamanho; i++) {
    DOC[i] = Number(
      readlineSync.question(`Informe o ${i + 1}º número do ${nomeDOC}:`)
    );
  }
  console.log(`\n${nomeDOC} verificado: ${DOC}\n`);
  switch (nomeDOC) {
    /*Aqui é definido os valores das variáveis "digito1" e "digito2". Caso o usuário tenha escolhido validar um CPF,
     a variável "multiplicador" é definida com os valores 10 e 11.
     A variável "multiplicador" refere-se aos valores usados para multiplicação dos digitos do documento.*/
    case "CPF":
    //variável= validaDOC("documento escolhido para validação; Array DOC; variável "multiplicador"");
      digito1 = validaDOC("CPF", DOC, 10);
      digito2 = validaDOC("CPF", DOC, 11);
      break;
    default:
      digito1 = validaDOC("CNPJ", DOC, 5);
      digito2 = validaDOC("CNPJ", DOC, 6);
      break;
  }

  console.log(`Primeiro digito verificador: ${digito1}\n`);
  console.log(`Segundo digito verificador: ${digito2}\n`);
  if ((DOC[DOC.length - 2] == digito1) & (DOC[DOC.length - 1] == digito2)) {
    console.log(`${nomeDOC} válido!\n`);
    Programa.repete(executar, perguntaRepete);
  } else {
    console.log(`${nomeDOC} inválido!\n`);
    SRC.Programa();
  }
}
executaDOC();
