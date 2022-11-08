var readlineSync = require("readline-sync");
let opcaoRepete = "S";

function padraoRepete (perguntaRepete){//PADRÃO REPETIÇÃO!!!
  opcaoRepete=readlineSync.question(`${perguntaRepete}\t (S) Sim\t (N) Não\n`);
    while(opcaoRepete!='S' && opcaoRepete!='N'){
    console.clear();
    console.log("Você escolheu uma opção incorreta! Tente novamente...");
    opcaoRepete=readlineSync.question(`${perguntaRepete}\t (S) Sim\t (N) Não\n`); 
    }
    return opcaoRepete
  }
  module.exports.padraoRepete=padraoRepete;