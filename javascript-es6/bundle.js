"use strict";

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
}

console.log(soma());
console.log(soma(1));
console.log(soma(3, 9));

var multiplicacao = function multiplicacao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a * b;
};

console.log(multiplicacao());
console.log(multiplicacao(1));
console.log(multiplicacao(3, 9));
