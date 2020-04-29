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

var minhaLista = new TodoList();

document.querySelector("#novotodo").onclick = function() {
  minhaLista.add("Novo item");
}

minhaLista.mostraUsuario();

console.log(Matematica.soma(3,5));



// Novas formas de definir variáveis (var, const, let)

const a = 1; // Valor Constante
// a = 3;  >> isso gera erro, pois não pode ter sua informação reatribuída.

const usuario = {nome: "Diego"};
usuario.nome = "Renato"; // permitido pois isso é mutação do objeto.

console.log(a + " - " + usuario.nome);

function teste(x) {
  let y = 10; // let é uma "variável" de escopo, só acessível dentro da função.
  console.log(x,y);

  if (true){
    let y = 100; // esse y é valido dentro do if
    console.log(x,y);
  }

  console.log(x,y); // volta a aprentar o y da function
}

teste(5);