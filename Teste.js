// Classe Aluno
class Aluno {
  constructor(primeiroNome, segundoNome) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
  }
}

// Crie um array com cinco objetos de alunos
var alunos = [
  new Aluno("João", "Silva"),
  new Aluno("Maria", "Souza"),
  new Aluno("Vinicin", "Alves"),
  new Aluno("Marinana", "Ambrosini"),
  new Aluno("May", "Japon")
];

// Função para imprimir os nomes dos alunos
function imprimirNomes() {
  for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    console.log("Nome do Aluno " + (i + 1) + ": " + aluno.primeiroNome + " " + aluno.segundoNome);
    document.getElementById("mostra").innerHTML += "Nome do Aluno " + (i + 1) + ": " + aluno.primeiroNome + " " + aluno.segundoNome + "<br>"
  }
}

// Chame a função para imprimir os nomes dos alunos
imprimirNomes();