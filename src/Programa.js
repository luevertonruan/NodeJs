var readlineSync = require("readline-sync");
let opcaoIniciar = "M";
let opcaoErrada = "Você informou uma opção incorreta!\n";

/*                                  -------------------------------  
                                                                                        MENÚ PRINCIPAL!!!*/
function menuPrincipal() {
  let opcaoMenuPrincipal = readlineSync.question(
    "\n>>> CALCULADORA MULTIFUNCIONAL <<<\n A - Calculadora tradicional\n B - Validador de CPF e CNPJ\n D - Gerador de Matriz Transposta\n E - Quero sair!\n \n    Digite a opção desejada: \n");
  return opcaoMenuPrincipal;
}
function executar() {
  menuPrincipal();

  /*while (opcaoMenuPrincipal!='E'){
        switch (opcaoMenuPrincipal){}*/
}
