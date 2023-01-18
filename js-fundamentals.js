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

// profile['name'] ---> 'tony'
// profile['age'] ---> 28
// profile['address'] ---> 'some address