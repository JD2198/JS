const coding = ["ruby","js","java","python"]

// coding.forEach(function(){

// }) 

coding.forEach((item) => {
    // console.log(item);
})

// if we want to store above thing in const

const code = coding.forEach((item) => {
    // console.log(item);
    return item // result still undefined
})

// console.log(code); // u will get as undefined as above one is not returning any value; for Each loop will not return any value

// Filter operation

const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter also takes callback as foreach but unlike forEach it will return value (if opened scope then write return, if () or in that line no need to write return)

const val= myNums.filter( (num) => {
    return num> 4
})   

// console.log(val);

// how to use above one in for each

const newNums =[]

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // array books mein filter laga rahe har ek obj mein as bk and condn lagayenge 
let userbooks = books.filter( (bk) => bk.genre==='History')

userbooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History')

console.log(userbooks);
 