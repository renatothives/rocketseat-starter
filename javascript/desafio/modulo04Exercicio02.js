/*  Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
    nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
    URL abaixo) os dados de repositórios do usuário e mostrá-los em tela: --*/

// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário.

var inputElement = document.querySelector("body input[name='user']");
var buttonElement = document.querySelector("body button");

console.log(buttonElement);