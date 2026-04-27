function one(){
    const username = "vedika"
    function two(){
        const website ="www.vedika.com"
        console.log(username) // here we are able to access the username variable from the outer function one() because of JavaScript's lexical scoping. The inner function two() has access to variables defined in its outer scope, which includes the username variable defined in one(). This allows us to log the value of username from within two().
       }
       console.log(website) // this will result in an error because the variable website is defined within the inner function two() and is not accessible outside of it. The outer function one() does not have access to variables defined in its inner functions, so trying to log website from one() will throw a ReferenceError.
       two()

}
one()



