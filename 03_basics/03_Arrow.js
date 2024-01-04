const myApp = {
    user: "Hitesh",
    id: 92345,

    welcomeMessage: function(){
        console.log(`${this.user}, welcome to this app`)     // this - when refer current context(whatever inside curly braces)

        console.log(this)
    }
}

myApp.welcomeMessage()
myApp.user ="Sam"     
myApp.welcomeMessage()    // this will print Sam as in above we changed the context tat is value, so in current contet user value became Sam 

console.log(this)


// function chai(){
//     let username = "Kiyer"
//     console.log(this) // u wwill get someting ddiff
//     console.log(this.username) // u wwill get undefined
// }
// chai()

// const chai = function () {
//     let username = "Kiyer"
//     console.log(this.username) // u wwill get undefined
// }
// chai()

const chai = () => {   // remove function keyword and after parantheses add arrow 
    let username = "Kiyer"
    console.log(this.username) // u wwill get undefined
}

chai()

// arrow func as well as normal function ddoesn't recognise this

// Arrow func basic syntax below

// const addTwo = (num1, num2) => {
//     return num1 + num2   // yaha we are using return keyword
// }

// console.log(addTwo(78,98))

// Another way to use arrow function by Implicit return

const addTwo = (num1, num2) => (num1 + num2)  // yaha khudse return hora not using return keyword 

