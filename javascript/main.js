var xhr = new XMLHttpRequest(); // classe que permite utilizar o AJAX

//AJAX é uma requisição assíncrona
xhr.open("GET","https://api.github.com/users/renatothives");
xhr.send(null);

xhr.onreadystatechange = function(){
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}