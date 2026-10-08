//exercicio 1 

const usuario = {
  perfil: {
    nome: "Maria"
  }
};

const nome = usuario.perfil?.nome ?? "Sem nome";
console.log(nome);

//exercicio 2 

const usuario1 = {};

const cidade = usuario1.cidade ?? "Cidade não informada";
console.log(cidade);

//exercicio 3 

const aluno = {
  nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

//A primeira seria 10 e a segunda 0.

//exercicio 4 

const usuario2 = {};

const cidade1 = usuario2.cidade1 ?? "Não informada";
console.log(cidade1);

// exercicio 5 

const pedido = {
  cliente: {
    nome: "Pedro"
  }
};

const telefone = pedido.cliente?.telefone ?? "Telefone não informado";
console.log(telefone);