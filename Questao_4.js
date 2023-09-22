// 1.1.1. Crie uma Classe Aluno
class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  // 1.1.2.1. Método para obter o nome completo
  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  // 1.1.2.2. Método para calcular a média
  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  // 1.1.2.3. Método para verificar a situação
  situacao() {
    if (this.media() > 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

// 1.2. Crie um array que contenha 5 objetos Aluno
var alunos = [
  new Aluno("João", "Silva", 7, 8.5),
  new Aluno("Maria", "Souza", 9, 9),
  new Aluno("Vinicin", "Alves", 8, 8),
  new Aluno("Marinana", "Ambrosini", 7, 7),
  new Aluno("May", "Japon", 6, 6)
];

// 1.3. Crie uma função para mostrar os dados dos alunos
function mostrarDadosAlunos() {
  for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    console.log("Nome completo: " + aluno.nomeCompleto());
    console.log("Média: " + aluno.media());
    console.log("Situação: " + aluno.situacao());
    console.log("\n");
  }
}

mostrarDadosAlunos();

function mostrarDadosAlunosNoHTML() {
  // Seleciona a div onde as informações serão exibidas
  var divInformacoes = document.getElementById("informacoes");

  if (divInformacoes) { // Verifica se a div foi encontrada
    // Cria um elemento de parágrafo (p) para cada aluno e insere as informações
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i];
      var paragrafo = document.createElement("p");

      // Monta a string com as informações do aluno
      var texto = "Nome completo: " + aluno.nomeCompleto() + "<br>" +
                  "Média: " + aluno.media() + "<br>" +
                  "Situação: " + aluno.situacao() + "<br><br>";

      // Define o conteúdo do parágrafo com as informações
      paragrafo.innerHTML = texto;

      // Adiciona o parágrafo à div de informações
      divInformacoes.appendChild(paragrafo);
    }
  }
}

// Chama a função dentro do evento window.onload
window.onload = function() {
  mostrarDadosAlunosNoHTML();
};