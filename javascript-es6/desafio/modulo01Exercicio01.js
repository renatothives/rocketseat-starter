/*  Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
    extender uma segunda classe chamada "Usuario".

    A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
    em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
    repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
    true na classe. */

class Admin {
  constructor(){
  };
};

class Usuario extends Admin {
  constructor(email,senha) {
    super();
    this.email = email;
    this.senha = senha;
  };
};