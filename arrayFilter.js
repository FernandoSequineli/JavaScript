const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Pedro', idade:33},
  { nome: 'Fabio', idade: 55},
  { nome: 'Marcia', idade: 73 },
  { nome: 'Joao', idade: 22 },
]


const nomeMaiorQueCinco = pessoas.filter(obj => obj.nome.length >=5);
const idadeMaiorQueCinquenta = pessoas.filter(obj => obj.idade >= 50);
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);
