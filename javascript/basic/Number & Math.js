const score = 100

const balance = new Number(1000)
console.log(balance)
console.log(score) // 100
console.log(typeof balance) // object
console.log(balance.toFixed(2))


const othernumber= 123.578
console.log(othernumber.toPrecision(5))

const hundered =10000000
console.log(hundered.toLocaleString('en-IN'))

//  MAth 

console.log(Math) // 3.141592653589793
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.round(4.7)) // 5
console.log(Math.round(4.4)) // 4
console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.sqrt(16)) // 4
console.log(Math.pow(2, 3)) // 8
console.log(Math.random()) // random number between 0 and 1
console.log(Math.abs(-5)) // 5
console.log(Math.max(1, 5, 3)) // 5
console.log(Math.min(1, 5, 3)) // 1
console.log(Math.sign(-5)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign(5)) // 1
console.log(Math.random() * 10) // random number between 0 and 10


const min = 10
const max = 20
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber) // random number between 10 and 20