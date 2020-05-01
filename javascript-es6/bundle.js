"use strict";

var usuario = {
  nome: "Renato",
  idade: 25,
  endereco: {
    cidade: "Londrina",
    uf: "PR"
  }
};
console.log(usuario); // desestruturação

var nome = usuario.nome,
    idade = usuario.idade;
console.log(idade);
var cidade = usuario.endereco.cidade;
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);
