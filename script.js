// 3 operações: depósito, saque e extrato, sair

const limiteSaques = 3; 

let saldo = 0; 
let limite = 500; 
let extrato = ""; 
let numeroSaques = 0; 


while (true) {
  menu = prompt(`
    ========================
    [d] Depósito
    [s] Saque
    [e] Extrato
    [q] Sair
    ========================
`);

  if (menu == "d") {
    valor = parseFloat(prompt("Informe o valor do depósito: R$"));

    if (valor > 0) {
      saldo += valor;
      extrato += `Depósito de R$${valor} \n`  ;
      alert(`Depósito de R$${valor} realizado`);
    } else {
      alert("Operação falhou! O valor informado é inválido!");
          }
    } 

    else if(menu == "s") {
      valor = parseFloat(prompt("Informe o valor do saque: "));
      excedeuSaldo = valor > saldo;
      excedeuLimite = valor > limite;
      excedeuSaque = numeroSaques  >= limiteSaques;

      if(excedeuSaldo) {
        alert("Operação falhou! Você não tem saldo suficiente!")
      } else if(excedeuLimite) {
        alert("Operação falhou! O valor do saque excede o limite!")
      } else if(excedeuSaque) {
        alert("Operação falhou! Número máximo de saques excedido")
      } else if(valor > 0){
          saldo -= valor;
          extrato += `Saque de R$${valor} \n`  ;
          alert(`Saque de R$${valor} realizado`);
          numeroSaques += 1;
      } else {
          alert("Operação falhou! O valor informado é inválido!");
      }
} else if(menu == "e") {
  mensagem = extrato == true ? "Não foram realizadas movimentações" : extrato
  alert(`
  ========= E X T R A T O =========
  ${mensagem}
  Saldo: R$ ${saldo.toFixed(2)}
  `)
}  else if(menu == "q") {
  alert("Obrigado pela preferência !!!")
  break
} else {
  alert("Opção inválida, por favor selecione novamente a operação desejada");
}


}

// Depósito:
// 1. Deve ser possível depositar valores positivos
// 2. Todos os depósitos devem ser armazenados em uma
// variável e exibidos na operação de extrato.

// Saque
// 1. O sistema deve permitir realizar 3 saques diários
// 2. com limite máximo de R$ 500,00 por saque
// 3. Caso o usuário não tenha saldo em conta, o sistema deve exibir
// uma mensagem informando que não será possível sacar o dinheiro por falta de saldo.
// 4. Todos os saques devem ser armazenados em uma variável e exibidos na operação de extrato.

// Extrato
// 1. Essa operação deve listar todos os depósitos e saques realizados na conta.
// 2. No fim da listagem deve ser exibido o saldo atual da conta.
// 3. Se o extrato estiver em branco, exibir a mensagem: Não foram realizadas movimentações.
// 4. Os valores devem ser exibidos utilizando o formato R$ xxx.xx, exemplo:
// 1500.45 = R$ 1500.45
