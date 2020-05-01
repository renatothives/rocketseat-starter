const usuario = {
  nome: "Renato",
  idade: 25,
  endereco: {
    cidade: "Londrina",
    uf: "PR"
  }
}

console.log(usuario);

// desestruturação
const { nome, idade } = usuario;
console.log(idade);

const { endereco: { cidade } } = usuario;
console.log(cidade);

function mostraNome ( { nome } ) {
  console.log(nome);
}

mostraNome(usuario);