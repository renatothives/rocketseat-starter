/*  Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
    nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
    URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
    URL de exemplo: https://api.github.com/users/diego3g/repos
    Basta alterar "diego3g" pelo nome do usuário.  --*/
    
var repositoriesPromise = function(){
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users/renatothives/repos");
    xhr.send(null);

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro requisição, status: " + xhr.status);
        };
      };
    };
  });
};

repositoriesPromise()
  .then(function(response){
    console.log(response[0].name);
  })
  .catch(function(error){
    console.warn(error);
  });