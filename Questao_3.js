// Dados do primeiro aluno
var nomeAluno1 = "João da Silva";
var primeiraNotaAluno1 = 7;
var segundaNotaAluno1 = 8.5;
var aluno1nota1_06 = primeiraNotaAluno1 * 0.6;
var aluno1nota2_04 = segundaNotaAluno1 * 0.4;
var somaNotaAluno1 = primeiraNotaAluno1 + segundaNotaAluno1;

// Dados do segundo aluno
var nomeAluno2 = "Maria Souza";
var primeiraNotaAluno2 = 9;
var segundaNotaAluno2 = 9;
var aluno2nota1_06 = primeiraNotaAluno2 * 0.6;
var aluno2nota2_04 = segundaNotaAluno2 * 0.4;
var somaNotaAluno2 = primeiraNotaAluno2 + segundaNotaAluno2;

// Dados do terceiro aluno
var nomeAluno3 = "Vinicin";
var primeiraNotaAluno3 = 8;
var segundaNotaAluno3 = 8;
var aluno3nota1_06 = primeiraNotaAluno3 * 0.6;
var aluno3nota2_04 = segundaNotaAluno3 * 0.4;
var somaNotaAluno3 = primeiraNotaAluno3 + segundaNotaAluno3;

// Mostrar dados dos alunos em alertas
window.onload = function () {
  alert("Nome do Aluno: " + nomeAluno1 + "\nPrimeira Nota: " + primeiraNotaAluno1 + "\nSegunda Nota: " + segundaNotaAluno1);
  alert("Nome do Aluno: " + nomeAluno2 + "\nPrimeira Nota: " + primeiraNotaAluno2 + "\nSegunda Nota: " + segundaNotaAluno2);
  alert("Nome do Aluno: " + nomeAluno3 + "\nPrimeira Nota: " + primeiraNotaAluno3 + "\nSegunda Nota: " + segundaNotaAluno3);
  alert("Soma das notas Aluno: " + nomeAluno1 + "\nResultado = " + somaNotaAluno1);
  alert("Soma das notas Aluno: " + nomeAluno2 + "\nResultado = " + somaNotaAluno2);
  alert("Soma das notas Aluno: " + nomeAluno3 + "\nResultado = " + somaNotaAluno3);
};
