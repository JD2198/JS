// for of loop: these are array specific loop

const arr = [1,2,3,4,5]

// no need of declaration increment condn
for (const num of arr) {
    // console.log(num); 
}

const greetings = "Hello world"
for(const greet of greetings){
    // console.log(greet);
}

// Maps -- known forvt heir unique key values and also for teir orders  

const map = new Map()
map.set('IN',"India")     // setting key n values using set
map.set('JP',"Japan")
map.set('FR',"France")
// console.log(map);

// loop on Maps

for(const [key, value] of map){   // like this it will be destrutre n u will get separate key n value
    // console.log(key);
    // console.log(value);
}

// for of loop in object

// const obj = {
//     'id': 24,
//     'name': "Elle"
// }
// for(const key of obj){
//     console.log(key)
// }
// above will not work u will get error as obj is not iterable
