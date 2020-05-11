// 4.1 Desestruturação simples

// A partir do seguinte objeto:
const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
};

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:

const nome = empresa.nome;
const cidade = empresa.endereco.cidade;
const estado = empresa.endereco.estado;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC