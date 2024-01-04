// for in loop for iteration in object

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}
// to get object keys
for (const key in myObj) {
    // console.log(key);
}


// to get object values
for (const key in myObj) {
    // console.log(myObj[key]);  // this will give values
}

// For in loop for arrays 

const myArr = [7,8,9,10]

for (const num in myArr) {
   console.log(num);         // in result u will get index not values as u used to got in for of
}

// iteration is not possible for Map throug for in loop, u will not get any result

const map = new Map()
map.set('IN',"India")     
map.set('JP',"Japan")
map.set('FR',"France")

for (const key in map){
    console.log(key)         //u will not get any result
}