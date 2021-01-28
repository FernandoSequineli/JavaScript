
const printSum = function (a, b) {
  //  console.log(a + b)
}
printSum(4, 3)

const sum = (a, b) => {
    return a + b
}

const subtract = (a, b) => a - b

function rand({min = 0, max = 1000}) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const obj = {max: 100, min: 10}
//console.log(rand(obj))


const result = score => score >= 7 ? 'pass' : 'fail'
console.log(result(7.1))
console.log(result(6.9))
