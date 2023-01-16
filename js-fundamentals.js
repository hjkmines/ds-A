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