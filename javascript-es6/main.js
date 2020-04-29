class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Renato";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

// Classe com método estático pode ser acessada diretamente
class Matematica {
  static soma(a,b) {
    return a + b;
  }
}

const minhaLista = new TodoList();

document.querySelector("#novotodo").onclick = function() {
  minhaLista.add("Novo item");
}

minhaLista.mostraUsuario();

console.log(Matematica.soma(3,5));