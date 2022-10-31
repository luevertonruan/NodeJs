var readlineSync = require("readline-sync");
let resultado, limite;
let opcaoIniciar = "M";
let nomeDOC = "DOC";
function repete(){                  //PADRÃO REPETIÇÃO!!!
  let opcaoRepete='Z';
  while(opcaoRepete!='S' && opcaoRepete!='N'){
  opcaoRepete=readlineSync.question('Deseja verificar mais algum documento?\t (S) Sim\t (N) Não\n');
    switch (opcaoRepete){
    case 'S':
      console.clear();
      executar();
      break
    case 'N':
      console.clear();
      process.exit();
    default:
      console.clear();
      console.log('Você escolheu uma opção incorreta!\n');
      continue
    }
    break
  }
}
  
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
function executar() {
  //              -----------------    VALIDADOR DE DOC
  let digito1, digito2;
  let DOC=[];
  let nomeDOC="Z";
  let tamanho;
  while(nomeDOC!='A' && nomeDOC!='B'){
    nomeDOC=readlineSync.question("Qual documento gostaria de validar?\n(A) CPF\t (B) CNPJ\n");
    switch (nomeDOC){
    case 'A':
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
    case "CPF":
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
    repete();
  } else {
    console.log(`${nomeDOC} inválido!\n`);
    repete();
  }
}
executar();
