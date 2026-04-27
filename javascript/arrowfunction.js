const addtwo=(n1,n2)=> {
    return n1+n2 // using explicit
}
console.log(addtwo(2,4))


const add =(n1,n2) => (n1+n2) // using implict 
console.log(add(4,5))

const usingobject =(name) =>({username:name})
const result =usingobject("vedika")
console.log(result.username)