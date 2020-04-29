const arr = [1,3,4,5,8,9,14];

const newArray = arr.map(item => item * 2);
console.log(newArray);

const newArr = arr.map(function(item){
  return item * 2;
});
console.log(newArr);

const teste = () => { // não recomendado
  return "teste"; 
}
console.log(teste());

const objeto = () => ({ nome: "Renato"}); // retornar um objeto
console.log(objeto());