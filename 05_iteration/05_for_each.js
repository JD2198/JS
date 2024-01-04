// for each loop 

const coding = ["js","ruby","java","python"]

coding.forEach( function (val){
    // console.log(val);
})

// to get value of an object which is inside an array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )

myCoding.forEach( function (item){
    console.log(item.languageName);
})