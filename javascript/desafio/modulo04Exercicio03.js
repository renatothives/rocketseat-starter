/*  Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
    nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
    URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
    URL de exemplo: https://api.github.com/users/diego3g/repos
    Basta alterar "diego3g" pelo nome do usuário.  --*/
    
var repositoriesPromise = function(usuario){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users/" + usuario + "/repos");
    xhr.send(null);

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.status);
        };
      };
    };
  });
};

var appElement = document.querySelector("#app");
var inputElement = document.querySelector("div#app input[name='user']");
var buttonElement = document.querySelector("div#app button");
var ulElement = document.createElement("ul");

ulElement.setAttribute("id","repositorios");
appElement.appendChild(ulElement);

function criarLiElement(conteudo,limparUl = true){
  if (limparUl)
    ulElement.innerHTML = "";

  var liElement = document.createElement("li");
  var text = document.createTextNode(conteudo);
  ulElement.appendChild(liElement);
  liElement.appendChild(text);
};

buttonElement.onclick = function(){
  var usuario = inputElement.value;
  criarLiElement("Carregando...");

  repositoriesPromise(usuario)
    .then(function(response){
      ulElement.innerHTML = "";
      for (const repositorio of response){
        criarLiElement(repositorio.name,false);
      }
    })
    .catch(function(error){
      if (error === 404){
        criarLiElement("Erro na requisição, usuário não exite.");
      } else {
        console.warn("Erro na requisição, status: " + error);
      }
    });

  inputElement.value = "";
};