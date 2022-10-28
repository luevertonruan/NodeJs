var readlineSync = require("readline-sync");

/*                                  -------------------------------  
                                                                                        MENÚ PRINCIPAL!!!*/
function menuPrincipal() {
  let listaOpcao =
    "\n>>> CALCULADORA MULTIFUNCIONAL <<<\n" +
    "A - Calculadora tradicional\n" +
    "B - Validador de CPF\n" +
    "C - Validador de CNPJ\n" +
    "D - Gerador de Matriz Transposta\n" +
    "E - Quero sair!\n" +
    "\n    Digite a opção desejada: \n";
  return listaOpcao;
}
function executar() {
  let opcaoMenuPrincipal, opcaoRepete;
  let repete = "zzz";
  let opcaoIniciar = "M";
  let opcaoErrada = "Você informou uma opção incorreta!\n";

  opcaoMenuPrincipal = readlineSync.question(menuPrincipal());

  /*while (opcaoMenuPrincipal!='E'){
        switch (opcaoMenuPrincipal){}*/
}
