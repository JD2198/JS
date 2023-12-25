// stack - primitive data types; heap - non primitive data types

// stack
let name = "Ram"
let name2 = name
name2 = "Shyyam"

console.log(name)
console.log(name2);

// heap
let user1 ={
    id: 23,
    addr: "Jsr"
}

let user2 = user1
user2.id = 56
console.log(user1.id);
console.log(user2.id);

