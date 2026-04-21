const mysymbol = Symbol("symbolkey");

const Jsuser ={
    name: "vedika",
    age :20,
    birthdate: "01-01-2004",
    email: "vedika@example.com",
    hobbies: ["coding", "reading", "traveling"],
    address: {
        street: "123 Main St",
        city: "NASHIK",
        state: "MAHARASHTRA",
        zip: "12345"
    },
    [mysymbol]: "This is a symbol"
}
console.log(Jsuser)
console.log(Jsuser.name) // vedika
console.log(Jsuser.age) // 20
console.log(Jsuser.address)
console.log(Jsuser.address.city) // NASHIK
console.log(Jsuser[mysymbol]) // This is a symbol

Jsuser.email="vedika.updated@example.com"

console.log("Updated email:", Jsuser) // vedika.updated@example.com


Jsuser.greeting = function() {
    console.log(`Hello js user ${this.name}  this is your age ${this.age} years old.`)
}

Jsuser.greeting() // Hello js user vedika  this is your age 20 years old.


console.log(Object.keys(Jsuser)) // [ 'name', 'age', 'birthdate', 'email', 'hobbies', 'address', 'greeting' ]
console.log(Object.values(Jsuser)) // [ 'vedika', 20, '01-01-2004', 'vedika.updated@example.com', [ 'coding', 'reading', 'traveling' ], { street: '123 Main St', city: 'NASHIK', state: 'MAHARASHTRA', zip: '12345' }, [Function: greeting ] ]
console.log(Object.entries(Jsuser)) // [ [ 'name', 'vedika' ], [ 'age', 20 ], [ 'birthdate', '01-01-2004' ], [ 'email', 'vedika.updated@example.com' ], [ 'hobbies', [ 'coding', 'reading', 'traveling' ] ], [ 'address', { street: '123 Main St', city: 'NASHIK', state: 'MAHARASHTRA', zip: '12345' } ], [ 'greeting', [Function: greeting ] ] ]

const newUser = Object.assign({}, Jsuser, { name: "new user", age: 25 })
console.log(newUser) // { name: 'new user', age: 25, birthdate: '01-01-2004', email: '


