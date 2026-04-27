const name = "vedika"
const age = 20

console.log('My name is ' + name + ' and I am ' + age + ' years old.') // My name is vedika and I am 20 years old.

// Template literals
console.log(`My name is ${name} and I am ${age} years old.`) // My name is vedika and I am 20 years old.

console.log(name.length) // 6
console.log(name.toUpperCase()) // VEDIKA
console.log(name.toLowerCase()) // vedika
console.log(name.includes("ved")) // true
console.log(name.startsWith("ve")) // true
console.log(name.endsWith("ka")) // true
console.log(name.indexOf("d")) // 2
console.log(name.slice(0, 3)) // ved
console.log(name.replace("ved", "vid")) // vidika
console.log(name[0]) // v
console.log(name.charAt(0)) // v
console.log(name.split("")) // [ 'v', 'e', 'd', 'i', 'k', 'a' ]

const message = "   Hello World!   "
console.log(message.trim()) // Hello World!
console.log(message.trimStart()) // Hello World!   
console.log(message.trimEnd()) //    Hello World!

const multilineString = `This is a multiline
string in JavaScript.`
console.log(multilineString)
// This is a multiline
// string in JavaScript.
const url = "https://www.example.com"
console.log(url.startsWith("https")) // true
console.log(url.endsWith(".com")) // true
console