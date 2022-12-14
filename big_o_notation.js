// O(1)

// Add two numbers
 
const addNumbers = (num1, num2) => {
    return num1 + num2
}

const numbers = [1, 2, 3, 4]

numbers.push(9) // O(1)
numbers.pop()

// log n

const logTime = (arr) => {
    let numberOfLoops = 0; 

    for (let i = 1; i < arr.length; i *= 2) {
        numberOfLoops++
    }

    return numberOfLoops
}

console.log(logTime([1, 2, 3, 4]))

// O(n)

for (let index = 0; index < array.length; index++) {
    console.log('linear time complexity')
}

while (arr.length < 20) {
    console.log('linear')
}

arr1.forEach(num => console.log(num))
arr1.map(num => console.log(num))
arr1.find(num => console.log(num))

// n^2

for (let index = 0; index < array.length; index++) { //n
    for (let index = 0; index < array.length; index++) { //n
    }
}

// n * n --> n^2 

while (condition) { //n
    for (let index = 0; index < array.length; index++) { //n
        for (let index = 0; index < array.length; index++) { //n
            for (let index = 0; index < array.length; index++) { //n
            }
        }
    }
}

// n * n * n * n ---> n^4

for (let index = 0; index < array.length; index++) {
    arr.map(num => console.log('this is n^2'))
}


// dropping constants

for (let index = 0; index < array.length; index++) { //n
}

for (let index = 0; index < array.length; index++) { //n
}

// 2n ---> n

// 2 ---> 1
arr1.push(1).pop()


// 2n^2 ---> n^2
for (let index = 0; index < array.length; index++) { //n
    for (let index = 0; index < array.length; index++) { //n
    }
}

for (let index = 0; index < array.length; index++) { //n
    for (let index = 0; index < array.length; index++) { //n
    }
}

// consolidation

// total time = 2 + n + n^2 + n^3 ---> n^3
const someFunction1 = (arr) => {
    let sum = arr[1] + arr[2]; // 1

    while (sum) { // n
        sum = arr[3] + arr[4] // 1
    }

    // n^3
    for (let index = 0; index < array.length; index++) { //n
        for (let index = 0; index < array.length; index++) { //n
            for (let index = 0; index < array.length; index++) { //n
            }
        }
    }

    // n^2
    for (let index = 0; index < array.length; index++) { //n
        for (let index = 0; index < array.length; index++) { //n
        }
    }
}

// Space Complexity

// constant space
const number = 1; 
const boolean = true; 
const undef = undefined; 
const thisIsNull = null; 

// linear space
const arrays = [1, 2, 3, 4, 5]
const object = {
    name: 'tony', 
    age: 99
}
const thisIsString = 'abcdef'
const map = new Map
map.set('name', 'tony')

const someFunction = (arr) =>  {
    return [arr[i], arr[j]]
}