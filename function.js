//funcao em JS e First-Class Object (Citizens)
// Higher-order function 

//criar de forma literal 
function fun1() { }

//armarzenar em uma variavel 
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
//console.log(array[0](2, 4))

//armazenar em um atributo objeto
const obj = {}
obj.falar = function () { return 'Opa' }
//console.log(obj.falar())


function soma(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // modo mais seguro
    return a + b + c
}
//console.log(soma(), soma(3), soma(2,4,5), soma(0,0,0))

function soma2(a = 1, b = 2, c = 3) {
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(2, 4, 5), soma2(0, 0, 0))


function soma3 (a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}