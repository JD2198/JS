const course ={
    id : "xxyz",
    name:"JS",
    price: 999,
    course_instructor: "Hitesh" 
}

course.id // normmal way

// destructuring
const {course_instructor: instructor} = course
console.log(instructor);