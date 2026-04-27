const course = {
    title: "JavaScript Basics",
    instructor: "xyz",
    duration: "4 weeks",
    level: "Beginner"
}

// Object destructuring
const{courseInstructor: instructor} = course
console.log(instructor) // xyz


const navabar = ({title, links}) => {
    console.log(title) // My Website
    console.log(links) // ["Home", "About", "Contact"]
}
console.log(navabar)
({    title: "My Website",
    links: ["Home", "About", "Contact"]
})  

