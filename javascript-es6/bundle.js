"use strict";

var arr = [1, 3, 4, 5, 8, 9, 14];
var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  // não recomendado
  return "teste";
};

console.log(teste());

var objeto = function objeto() {
  return {
    nome: "Renato"
  };
}; // retornar um objeto


console.log(objeto());
