function loginuserMessage(username) 
{
    if(!username) {
        console.log("Please enter your username");
        return
    }
    return `Welcome ${username}!`;
}
console.log(loginuserMessage());

