console.log("2">3)

console.log(null == undefined)
console.log(null == 0)
console.log(null > 0)
// this is because null is only equal to undefined and not to any other value, including 0. When comparing null to 0, JavaScript converts null to a number, which results in 0. Therefore, null > 0 evaluates to false.
// In JavaScript, the comparison operators (>, <, >=, <=) perform type coercion when comparing values of different types. When you compare null to a number, JavaScript converts null to 0 before performing the comparison. Therefore, null > 0 evaluates to false because 0 is not greater than 0.
// dont compare null with any other value except undefined, because it will give unexpected results.