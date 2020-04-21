var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos(){
  listElement.innerHTML = "";

  for (todo of todos){
    var todoElement = document.createElement("li");
    var todoText= document.createTextNode(todo);

    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("-Excluir");
    
    var pos = todos.indexOf(todo);

    linkElement.setAttribute("href","#");
    linkElement.setAttribute("onclick","deleteTodo(" + pos + ")");
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo(){
  var todoText = inputElement.value;
  
  // Adicionar um valor no final do array
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos){
  // método que remove uma determinada quantida de itens do array (segundo parâmetro), iniciando com base no primeiro parâmetro.
  todos.splice(pos,1);

  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  // localStorage grava chave e valor em formato string
  localStorage.setItem("list_todos",JSON.stringify(todos));
}

buttonElement.onclick = addTodo;

renderTodos();