// exercicio 1

const aluno = {
  nome: "Carlos",
  endereco: {
    cidade: "São Paulo"
  }
};

console.log("Cidade de Carlos:", aluno.endereco?.cidade);

//exercicio 2 

const usuario = {
  nome: "Ana"
};

console.log(usuario.endereco?.cidade);

//exercicio 3

const produto = {
  nome: "Notebook"
};

console.log(produto.fabricante?.nome);

// A saída será "undefined", alternativa B

//exercicio 4 

const cliente = {
  nome: "João"
};

console.log(cliente.endereco?.cidade);

//exercicio 5 

const escola = {
  diretor: {
    contato: {
      email: "diretor@escola.com"
    }
  }
};

console.log(escola.diretor?.contato.email);