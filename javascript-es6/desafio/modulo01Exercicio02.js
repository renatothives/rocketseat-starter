/*  A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find): */

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];
 
// Utilizando o map
//   Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const arrMap = usuarios.map(item => item.idade);
console.log(arrMap);

// Utilizando o filter
//   Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//   anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const arrFilter = usuarios.filter(item => item.idade >= 18);
console.log(arrFilter);

// Utilizando o find
//   Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const arrFind = usuarios.find(item => item.empresa === `Google`);
console.log(arrFind);

// Unindo operações
//   Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//   no máximo 50 anos:
//   Resultado: [
//     { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' } ]
 
const arrMaximo = usuarios.filter(item => item.idade * 2 <= 50);
console.log(arrMaximo);