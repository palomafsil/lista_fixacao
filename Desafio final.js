//exercicio 1 

const usuario = {
  nome: "",
  idade: 0,
  endereco: null
};

console.log(usuario.nome || "Visitante");
console.log(usuario.nome ?? "Visitante");
console.log(usuario.idade || 18);
console.log(usuario.idade ?? 18);
console.log(usuario.endereco?.cidade);
console.log(usuario.endereco?.cidade ?? "Sem cidade");

//  1) O valor será 18
//  2) O valor será 0 
//  3) O valor será undefined
//  4) O valor sera "Sem cidade"

//exercicio 8

// a diferença entre (??) e (||) e que o (??) ele é usado em um valor que é considerado padrao se caso for null ou undefined.
// e o (||) ele é usado no segundo valor se caso o primeiro valor for falsy.