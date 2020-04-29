"use strict";

var arr = [1, 3, 4, 5, 8, 9, 14]; // map serve para percorrer o arrya/vetor e retornar algo

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // consumir todo o vetor e transformar todo ele numa única variável, geralmente um número.

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // irá verificar se o item corresponde com a validação feita, obrigatoriamente tem que retornar true ou false.

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // irá buscar uma informação no array, quando não encontrato retorna "undefined"

var find = arr.filter(function (item) {
  return item === 4;
});
console.log(find);
