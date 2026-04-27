// check the  user log in is present or not
const isuserlog =true

if(isuserlog){
    console.log('yes')
}
else {
    console.log('not')
}

const math =false
const science = false
if(math && science){
    console.log("enroll for both neet and jee")

}
if (math || science){
    console.log("enroll for jee either science")

}
else{
    console.log("not eligible")
}


// flasly value =false, 0, -0, 0n, "", null, undefined, NaN

// truthy value=true, 1, -1, "text", "false", [], {}, function(){} "0"


//Nullish Coalescing operator(??):Null undefined


let val1;
val1=2?? 10
console.log(val1)

// terniary operator
//condition? true:false



