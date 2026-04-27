function loginuserMessage(username) 
{
    if(!username) {
        console.log("Please enter your username");
        return
    }
    return `Welcome ${username}!`;
}
console.log(loginuserMessage());

function CalculateCartPrice(...cartItems) {
    return cartItems


}console.log(10,20,30)



const user = {
    name: "Vedika",
    age: 25,
    email: "vedika@example.com",
    price : 100
}

function handleUserData(anyobject) 
{
    console.log(`username is ${anyobject.name} and email is ${anyobject.email} and price is ${anyobject.price}`)
}
(handleUserData(user))


