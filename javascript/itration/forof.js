const arr=[1,2,3,4,5,6,7]

for(const num of arr){
    console.log(num)
}

//maps
const myMap = new Map

myMap.set("name", "Vedika");
myMap.set("age", 22);
myMap.set("city", "Nashik");

for (let [key, value] of myMap) {
    console.log(key, value);
}