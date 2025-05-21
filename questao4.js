class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    return this.media() >= 6 ? "Aprovado" : "Reprovado";
  }
}

const alunos = [
  new Aluno("João", "Silva", 7, 8.5),
  new Aluno("Amanda", "Vieira", 9, 4.7),
  new Aluno("Edna", "Antonia", 5, 10),
  new Aluno("Carlos", "Pereira", 6, 6),
  new Aluno("Beatriz", "Mendes", 8, 9)
];

function exibirAlunos() {
  alunos.forEach((aluno) => {
    alert("Nome: " + aluno.nomeCompleto() + "; Média: " + aluno.media() + "; Situação: " + aluno.situacao());
  });
}

// Executa a função ao carregar a página
exibirAlunos();
