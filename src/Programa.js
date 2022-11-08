// IMPORTAÇÕES
const readlineSync = require("readline-sync");
const calculadora = require("./Calculadora.js");
const CNPJ = require("./CNPJ.js");
const CPF = require("./CPF.js");
const Matriz = require("./Matriz.js");
const repete = require("./repete.js");

// DECLARAÇÃO DE VARIÁVEIS
let opcaoRepete = "Z";
let opcaoMenuPrincipal = "Z";
let opcaoErrada = "Você escolheu uma opção incorreta! Tente novamente...";

//                                                        MENÚ PRINCIPAL!!!
function menuPrincipal() {
  let operadorMenu =
    "\n>>> CALCULADORA MULTIFUNCIONAL <<<\n A - Calculadora tradicional\n B - Validador de CPF\n C - Validador de CNPJ\n D - Gerador de Matriz Transposta\n E - Quero sair!\n \n    Digite a opção desejada: \n";
  while (
    opcaoMenuPrincipal != "A" &&
    opcaoMenuPrincipal != "B" &&
    opcaoMenuPrincipal != "C" &&
    opcaoMenuPrincipal != "D" &&
    opcaoMenuPrincipal != "E"
  ) {
    opcaoMenuPrincipal = readlineSync.question(operadorMenu);
    console.clear();
    console.log(opcaoErrada);
  }
  console.clear();
  return opcaoMenuPrincipal;
}

function executaPrograma() {
  while(opcaoMenuPrincipal!="E"){
    menuPrincipal();
  
    switch (opcaoMenuPrincipal) {
      case "A"://Calculadora
        opcaoMenuPrincipal="Z";
        console.clear();
        //Execução do arquivo
        calculadora.executaCalculadora();

        //Padrão repetição
        perguntaRepete="Deseja realizar mais algum cálculo?";
        opcaoRepete= repete.padraoRepete(perguntaRepete);
        if(opcaoRepete=="S"){
          opcaoMenuPrincipal="A";
          continue
        }else{
          console.clear();
          menuPrincipal();
        }
        
        
        break
      case "B"://CPF
        opcaoMenuPrincipal="Z";
        console.clear();
        //Execução do arquivo
        CPF.executaCPF();
        //Site gerador de CPF: https://www.4devs.com.br/gerador_de_cpf

        //Padrão repetição
        perguntaRepete = "Deseja validar mais algum CPF?";
        opcaoRepete= repete.padraoRepete(perguntaRepete);
        if(opcaoRepete=="S"){
          opcaoMenuPrincipal="B";
          continue
        }else{
          console.clear();
          menuPrincipal();
        }

        
        break
      case "C"://CNPJ
        opcaoMenuPrincipal="Z";
        console.clear();
        //Execução do arquivo
        CNPJ.executaCNPJ();
        //Site gerador de CNPJ: https://www.4devs.com.br/gerador_de_cnpj

        //Padrão repetição
        perguntaRepete = "Deseja validar mais algum CNPJ?";
        opcaoRepete= repete.padraoRepete(perguntaRepete);
        if(opcaoRepete=="S"){
          opcaoMenuPrincipal="C";
          continue
        }else{
          console.clear();
          menuPrincipal();
        }

       
        break
      case "D"://Matriz
        opcaoMenuPrincipal="Z";
        console.clear();
        //Execução do arquivo
        Matriz.executaMatriz();

        //Padrão repetição
        perguntaRepete = "Deseja gerar mais alguma Matriz Transposta?";
        opcaoRepete= repete.padraoRepete(perguntaRepete);
        if(opcaoRepete=="S"){
          opcaoMenuPrincipal="D";
          continue
        }else{
          console.clear();
          menuPrincipal();
        }

        break
      }
    }
    console.clear();
    process.exit();
  }

executaPrograma();
