class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(){
    this.todos.push("Novo todo");
    console.log(this.todos);
  }
}

const minhaLista = new TodoList();

document.querySelector("#novotodo").onclick = function() {
  minhaLista.addTodo();
}