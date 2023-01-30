// data types 

// boolean type: 
const test = (arr) => {
    if (arr.length) {
        console.log('true')
    } else {
        console.log(arr.length)
        console.log('false')
    }

    return arr; 
}

console.log(5 === '5')

// functions

// function declaration
function sayHello(number) {
    return number * 2
}
// arrow function
const sayHello2 = (number) => {
    const double = number * 2
    return double   
}

// first class function: being able to assign a function to a variable is a first class function!!!!
const sayHello1 = (number) => {
    const double = number * 2
    return double   
}

// higher order function: a function can accept another function as a ARGUMENT!!!!!
const sayGoodbye = () => {
    console.log('byeeeeee!')
}
// saySomething is your HIGHER ORDER FUNCTION!!!!
const saySomething = (saySomething) => {
    return saySomething()
}

console.log(saySomething(sayGoodbye))

// callbacks: calling (invoking) a function inside another FUNCTION!!!!
const sayGoodbye2 = () => {
    console.log('byeeeeee!')
}
// saySomething is your HIGHER ORDER FUNCTION!!!!
const saySomething2 = (saySomething) => {
    return saySomething2() <------- CALLBACK!!!
}

console.log(saySomething2(sayGoodbye2))


const arr = [1, 2, 3, 4, 5]

console.log(arr.map((num) => console.log(num)))

// function scope!

let name1 = 'tony'

const someFunction = (name) => {
    let name
    if (name) {
        const name2 = 'maria'
        const name3 = 'sam'
        console.log(name2, name3)
    } else {
        console.log(name2)
        console.log('no')
    }
}

console.log(someFunction(name1))

for loops

const arr3 = [1, 2, 3, 4, 5]
const string2 = 'Maria'
// for statement
for (let i = 0; i < arr3.length; i++) {
    // console.log(arr3[i])
}

for (let i = arr3.length - 1; i >= 0; i--) {
    // console.log(arr3[i])
}

// loop through the string
for (let i = string2.length - 1; i >= 0; i--) {
    console.log(string2[i])
}

// while 
const colors = ['white', 'black', 'grey', 'yellow']
let isCorrectColor = false; 

let i = 0
while (!isCorrectColor) {
    if (colors[i] === 'grey') {
        isCorrectColor = true; 
    } else {
        i++
    }
}

const name5 = 'Maria'
let isCorrectLetter = false; 
let j = 0; 
while (!isCorrectLetter) {
    if (name5[i] === 'r') {
        isCorrectLetter = true; 
    } else {
        j++
    }
}

// let, var, const 

var name = 'Maria'
console.log(name2)
if (name) {
    console.log(name)
} else {
    var name2 = 'Bob'
}

// for..of statement
// array
let nums = [1, 2, 3, 4, 5]
for (let num of nums) {
    // console.log(num)
}

// string
let word = 'Tony' 
for (let letter of word) {
    // console.log(letter)
}

// for..in statement

const profile = {
    name: 'tony', 
    age: 28, 
    address: 'some address'
}

for (let key in profile) {
    console.log(profile[key])
}

console.log(profile.name)

// ------

// profile['name'] ---> 'tony'
// profile['age'] ---> 28
// profile['address'] ---> 'some address

// arrays

const numbers = [1, 2, 3, 4, 5]

// map - transforms your array values, NM
const double = numbers.map(num => num * 2)

// filter - filters in/out values based on your condition, NM
const filteredArray = numbers.filter(num => num <= 3)

// find - retrieves the FIRST element that meets your condition, NM
const find3 = numbers.find(num => num === 3);

// slice - returns a new subarray, 
// slice(startIndex, endIndex)
// NM
// startIndex: INCLUSIVE! 
// endIndex: NOT INCLUSIVE! 

const arr2 = numbers.slice(2)

const arr3 = numbers.slice(1, 3)

// splice - return a array of deleted items
// splice(startIndex, deleteCount, item1ToAdd, itemNToAdd)
// M
// startIndex: Inclusive

const arr4 = numbers.splice(1, 1, 8)

console.log(numbers)

// --------

// flat - return a array with reduced inner array layers
// flat(levelOfArraysToRemove)
// NM

// if you don't specify a number inside this arg, by default it only removes ONE layer!!!
// if you do specificy a number inside this arg, it removes whatever number of layers you passed in!!!!

const arr5 = [[[1, 2, 3]], [[4, 5, 6]]]

console.log(arr5.flat(2))

// includes - returns a boolean if a element exists or not!
// includes(itemToFind)
// NM

const arr6 = [1, 2, 3, 4, 5]

console.log(arr6.includes(43))

// pop - returns the removed element from end the array list
// pop()
// M

const arr7 = [1, 2, 3, 4, 5]

console.log(arr7.pop(), 'this is now the array!', arr7)

// shift - return the removed element from the beginning of the array list
// shift()
// M 

const arr8 = [1, 2, 3, 4, 5]
arr8.shift()
console.log(arr8)

// unshift - returns the added element from the beginning of the array list
// unshift(itemToAdd)
// M

const arr9 = [1, 2, 3, 4, 5]
arr9.unshift(15)

console.log(arr9)

// push - returns the added element from the beginning of the array list
// push(itemToAdd)
// M

const arr10 = [1, 2, 3, 4, 5]
arr10.push(15)

console.log(arr10)

// for loops 

// for (initializer, limit, incrementor/decremntor)

// left to right traversal 
const arr11 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr11.length; i++) {

}

// right to left traversal 
for (let i = arr11.length - 1; i = 0; i--) {

}

// forEach - side effect loop to traverse a array 
// forEach(item => ...do something with that item)
const arr12 = []

arr11.forEach(num => arr12.push(num))

console.log('ARE YOU SURE?', arr12)

// ----------------------
const arr8 = [1, 2, 3, 4, 5]

const total = arr8.reduce((acc, num) => acc + num, 0)

console.log(total)

// Objects - non ordered data structures, that have key value pairs
const profile = {
    name: 'Tony',
    age: 89, 
    address: 'some address'
}

// accessing
const name1 = profile.name
const name2 = profile['name']; 

// setting 
profile.height = '5ft'
profile['height'] = '5ft'

// list out all the keys in a array 
const listOfKeys = Object.keys(profile); 
// list out all the values in a array 
const listOfValues = Object.values(profile)
// list out all the entires of both keys and values
const listOfEntries = Object.entries(profile); 

// for...in -- iterates through enumerable property
for (const property in profile) {
    console.log(profile[property])
}

// destructuring
const profile1 = {
    name: 'Tony Kim',
    movies: ['Batman', 'Howls moving castle', 'Whisper Away'], 
    friends: [
        {
            name: 'Sam Long'
        },
        {
            name: 'Joe Smith'
        }
    ]
}

const {
    name, 
    friends: [
        friend1, 
        friend2
    ]
} = profile1

console.log(friend1.name)

// for of - loop through both arrays and strings
// for in - loop through a SINGLE object

const numbers = [
    {
        num: 1, 
        age: 9
    },
    {
        num: 3, 
        age: 2
    }
]

for (const { num, age } of numbers) {
    console.log(num, age)
}