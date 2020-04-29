function soma(a = 2,b = 3){
  return a + b;
}

console.log(soma());
console.log(soma(1));
console.log(soma(3,9));

const multiplicacao = (a = 2,b = 3) => a * b;

console.log(multiplicacao());
console.log(multiplicacao(1));
console.log(multiplicacao(3,9));