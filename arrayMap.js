const numeros = [5, 50, 10, 44, 23, 99, 12, 62, 7, 9, 0, 11];

const numberDouble = numeros.map(function (obj) {
  return obj * 2;
});

// console.log(numberDouble);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Pedro', idade: 33 },
  { nome: 'Fabio', idade: 55 },
  { nome: 'Marcia', idade: 73 },
  { nome: 'Joao', idade: 22 },
]

const nomes = pessoas.map(function (obj) {
  return obj.nome;
})

const comIds = pessoas.map(function(obj, indice){
  const newObj = {...obj};
  newObj.id = (indice +1);
  return newObj;
})
console.log(comIds);