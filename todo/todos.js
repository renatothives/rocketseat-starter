var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  "Fazer café",
  "Estudar javascript",
  "Acessar comunidade"
];

function renderTodos(){
  listElement.innerHTML = "";

  for (todo of todos){
    var todoElement = document.createElement("li");
    var todoText= document.createTextNode(todo);
    
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

function addTodo(){
  var todoText = inputElement.value;
  
  // Adicionar um valor no final do array
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
}

buttonElement.onclick = addTodo;

renderTodos();