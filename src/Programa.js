var readlineSync = require("readline-sync");
let opcaoErrada = "Você informou uma opção incorreta!\n";
let perguntaRepete='Deseja voltar ao menu principal?'; 
var executar=executaPrograma();


function repete(executar, perguntaRepete){                  //PADRÃO REPETIÇÃO!!!
  let opcaoRepete='Z';
  while(opcaoRepete!='S' && opcaoRepete!='N'){
  opcaoRepete=readlineSync.question(`${perguntaRepete}\t (S) Sim\t (N) Não\n`);
    switch (opcaoRepete){
    case 'S':
      console.clear();
      executar;
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
/*                                  -------------------------------  
                                                                                        MENÚ PRINCIPAL!!!*/
function menuPrincipal() {
  let opcaoMenuPrincipal='Z';
  while(
  opcaoMenuPrincipal != "A" &&
  opcaoMenuPrincipal != "B" &&
  opcaoMenuPrincipal != "C" &&
  opcaoMenuPrincipal != "D"/*&&
  opcaoMenuPrincipal != "E"*/
  ){
    opcaoMenuPrincipal = readlineSync.question(
      "\n>>> CALCULADORA MULTIFUNCIONAL <<<\n A - Calculadora tradicional\n B - Validador de CPF e CNPJ\n C - Gerador de Matriz Transposta\n D - Quero sair!\n \n    Digite a opção desejada: \n"
    );
    switch(opcaoMenuPrincipal){
      case 'A':
        executaCalculadora();
        break
      case 'B':
        executaDOC();
        break
      case 'C':
        executaMatriz();
        break
      case 'D':
        console.clear();
        process.exit();
        break
    /*case 'E':
        console.clear();
        process.exit();
        break */

      default:
        console.clear();
        console.log(opcaoErrada);
        continue

    }
  }
  
  
  return opcaoMenuPrincipal;
}
function executaPrograma() {
  menuPrincipal();
  repete(executar, perguntaRepete);
}
executaPrograma();
