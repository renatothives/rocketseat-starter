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
}

function deleteTodo(pos){
  // método que remove uma determinada quantida de itens do array (segundo parâmetro), iniciando com base no primeiro parâmetro.
  todos.splice(pos,1);

  renderTodos();
}

buttonElement.onclick = addTodo;

renderTodos();