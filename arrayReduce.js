const numeros = [5, 50, 10, 44, 23, 99, 12, 62, 7, 9, 0, 11];

const total = numeros.reduce(function(acumulador, valor, indice, array){
  acumulador += valor;
  return acumulador;

}, 0)
console.log(total);

const numerosPares = numeros.reduce(function (acumulador, valor, indice, array) {
  if(valor % 2 === 0) acumulador.push(valor)
  return acumulador;

}, [])
console.log(numerosPares);