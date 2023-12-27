
// object declaration

const tinderuser = new Object()    // this is singleton object

const tinderuser2 = {}       // this is non singleton object

tinderuser.id = "123abc"
tinderuser.name = "Sam"
tinderuser.isLoggedIn = "false"

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Tam",
            lastname: "Fan"
        }
    } 
}

console.log(regularUser.fullname.userfullname.firstname);

// to get keys from a object
console.log(Object.keys(tinderuser));

// to get values from a object
console.log(Object.values(tinderuser));

