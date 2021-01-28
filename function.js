//funcao em JS e First-Class Object (Citizens)
// Higher-order function 

//criar de forma literal 
function fun1() { }

//armarzenar em uma variavel 
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 4))

//armazenar em um atributo objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())