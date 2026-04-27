function addnumbers(number1, number2)//parameters 
{
  console.log(number1+number2)
  console.log("without return statement, the function will return undefined by default")

}
addnumbers(5, 10)//arguments



function subtraction(number1, number2)
{
    let subresult = number1 - number2
    return subresult

}
console.log(subtraction(10, 5)) // the result of subtraction is: 5


function multiplynumbers(number1, number2)
{
   console.log("used return statement to return the result of multiplication")
  return number1*number2 
  console.log("this will not be executed because it is after the return statement")
}
const result = multiplynumbers(5, 10)
console.log(result) // 50



