const myDate = new Date();
console.log(myDate.toString);
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getDay());

const myBirthday = new Date("2000-01-01");
console.log(myBirthday.toDateString());
console.log(myBirthday.toLocaleString());