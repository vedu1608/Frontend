const accountId = 1; 
let balance = 1000;
var accountHolderName = "vedika Date";
var accountType = "savings";
var accountEmail ="vedika@example.com";
var accountPhoneNumber = "123-456-7890";
var accountAddress = "Nashik, Maharashtra, India";
let accountCreationDate = new Date("2023-01-01").toDateString(); // January 1, 2023
var accountStatus = "active";
console.table({
    accountId,
    balance,
    accountHolderName,
    accountType,
    accountEmail,
    accountPhoneNumber,
    accountAddress,
    accountCreationDate,
    accountStatus
});

/* prefer using const for variables that won't be reassigned, and let for variables that may change. Avoid using var to prevent issues with variable hoisting and scope. */