const a = require('./a')
const b = require('./b')
const calc = require('./calc')

console.log(calc.num);

setTimeout(() => {
    calc.num = 20
    console.log(calc.num)
}, 2000)

// let res = calc.add(3,1)
// console.log(res)