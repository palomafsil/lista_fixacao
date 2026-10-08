// exercicio 1 

const nome = null;

console.log(nome ?? "Não informado");

// exercicio 2 

const idade = null;

console.log(idade ?? 18);

// O resultado será 18, alternativa C

//exercicio 3

const estoque = 0;

console.log(estoque ?? 10);

//O resultado será 0, alternativa A

// exercicio 4 

const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// Os resultados serão diferentes porque (||) é usado no segundo valor se caso o primeiro for falsy.
//Os resltados serão diferentes porque (??) é usado em um valor padrão se caso o valor for null ou undefined.