myarray=[1,2,3,4,5]
console.log(myarray)
console.log(myarray.length) // 5
console.log(myarray[0]) // 1
console.log(myarray[myarray.length-1]) // 5


// Array methods
myarray.push(6) // adds 6 to the end of the array
console.log(myarray) // [1, 2, 3, 4, 5, 6]
myarray.pop() // removes the last element of the array
myarray.unshift(0) // adds 0 to the beginning of the array
console.log(myarray) // [0, 1, 2, 3, 4, 5]
myarray.shift() // removes the first element of the array
console.log(myarray) // [1, 2, 3, 4, 5]

console.log(myarray.indexOf(3)) // 2
console.log(myarray.includes(4)) // true
console.log(myarray.slice(1, 4)) // [2, 3, 4]

const newArray = myarray.map(x => x * 2) // [2, 4, 6, 8, 10]
console.log(newArray)

const filteredArray = myarray.filter(x => x % 2 === 0) // [2, 4]
console.log(filteredArray)

const sum = myarray.reduce((acc, curr) => acc + curr, 0) // 15
console.log(sum)

newArray=myarray.join()
console.log(newArray)
console.log(typeof newArray) // string


const  heros = ["superman", "batman", "spiderman"]
const action_heros = ["ironman", "thor", "hulk"]

heros.push(action_heros) // adds all elements of action_heros to heros
console.log(heros) // [ 'superman', 'batman', 'spiderman', [ 'ironman', 'thor', 'hulk' ] ]

const combinedHeros = heros.concat(action_heros) // combines heros and action_heros into a new array
console.log(combinedHeros) // [ 'superman', 'batman', 'spiderman', [ 'ironman', 'thor', 'hulk' ], 'ironman', 'thor', 'hulk' ]
const allHeros = [...heros, ...action_heros] // combines heros and action_heros into a new array using spread operator
console.log(allHeros) // [ 'superman', 'batman', 'spiderman', [ 'ironman', 'thor', 'hulk' ], 'ironman', 'thor', 'hulk' ]

const number_array= [1,2,3,[4,5],6,7,[8,9,[10,11]]]
console.log(number_array) // [ 1, 2, 3, [ 4, 5 ], 6, 7, [ 8, 9, [Array] ] ]
const flatArray = number_array.flat(Infinity) // flattens the array to a single level
console.log(flatArray) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

console.log(number_array.length)

console.log(Array.isArray("vedika"))
console.log (Array.from("vedika")) // [ 'v', 'e', 'd', 'i', 'k', 'a' ]  

