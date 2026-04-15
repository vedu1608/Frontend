let number = "42"

console.log("String value:", number) // String value: 42
console.log("Type before conversion:", typeof number) // Type before conversion: string

// Converting string to number
let convertedNumber = Number(number)
console.log("Converted number:", convertedNumber) // Converted number: 42
console.log("Type after conversion:", typeof convertedNumber) // Type after conversion: number
console.log("Is the conversion successful?", !isNaN(convertedNumber)) // Is the conversion successful? true

// Converting number back to string
let isloggedIn = true
console.log("Boolean value:", isloggedIn) // Boolean value: true
console.log("Type before conversion:", typeof isloggedIn) // Type before conversion: boolean

let convertedString = String(isloggedIn)
console.log("Converted string:", convertedString) // Converted string: true
console.log("Type after conversion:", typeof convertedString) // Type after conversion: string