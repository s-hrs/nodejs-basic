const calc = require('./calc')

setTimeout(() => {
    calc.num = 10;
    console.log(calc.num)
}, 1000)