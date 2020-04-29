const arr = [1,3,4,5,8,9,14];

// map serve para percorrer o arrya/vetor e retornar algo
const newArr = arr.map(function(item,index){
  return item + index;
});
console.log(newArr);

// consumir todo o vetor e transformar todo ele numa única variável, geralmente um número.
const sum = arr.reduce(function(total,next){
  return total + next;
});
console.log(sum);

// irá verificar se o item corresponde com a validação feita, obrigatoriamente tem que retornar true ou false.
const filter = arr.filter(function(item){
  return item % 2 === 0;
});
console.log(filter);

// irá buscar uma informação no array, quando não encontrato retorna "undefined"
const find = arr.filter(function(item){
  return item === 4;
});
console.log(find);