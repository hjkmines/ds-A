// boolean 
true or false

// string 

const number = 8

'hello' or "hello" or `hello ${number}`

// number 
-9999999 to 9999999

// big int
-99999999 to 99999999

// falsey values 
0 or null or undefined or NaN

// comparison operators
== - loosely equals

'2' == 2 ---> true

=== - strictly equals

'2' === 2 ---> false

// 2 ways of writing a function
function sayHello() {
 return console.log('hi')
}

const sayHello = () => { console.log(sayHello) }

// 3 types of functions 

// first class function
const number1 = 1
const string1 = 'hi'
const sayGoodBye = () => {

}

// higher order function
const saySomething = (thisIsAFunction) => {
    thisIsAFunction()
}   

// callback

const arr = [1, 2, 3, 4, 5]

const double = arr.map(num => {
    console.log(num)
    return num * 2
})

useEffect(() => {
    fetch('www.google.com')
})

// scoping 
const name1 = 'Wes'

const sayHello = () => {
    const name2 = 'Tony'
    
    console.log(name4)
    
    if (true) {
        const name3 = 'Max'
        if (true) {
            const name4 = 'Jack'
        }
    }
}

sayHello()

// for loops
const arr2 = ['a', 'b', 'c', 'd', 'e'] 
               0    1    2    3    4

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[4])
}

const word = 'Tony'

for (let i = 0; i < word.length; i++) {
    console.log(word[3])
}