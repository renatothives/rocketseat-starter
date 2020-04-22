/*  Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
    segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
    idade o resultado deve cair no .then, caso contrário, no .catch  --*/


var minhaPromise = function(){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users/renatothives");
    xhr.send(null);


//AJAX é uma requisição assíncrona
    xhr.onreadystatechange = function(){
xhr.open("GET","https://api.github.com/users/renatothives");
      if (xhr.readyState === 4){
xhr.send(null);
        if (xhr.status === 200){
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição.");
        }
      }
    }
  })
}

    
function checaIdade(idade){
  return new Promisse(function(){
    if (idade >= 18){
      resolve();
    } else {
      reject();
    }
  })
}

checaIdade(20)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
