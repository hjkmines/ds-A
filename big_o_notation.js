const performance = require('perf_hooks').performance; 

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

// Option A
// const pushNumberToArray1 = (arr, num) => {
//     const lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             arr.splice(lastIndex, 0, num); 
//         }
//     }

//     return arr; 
// }

// // Option B
// const pushNumberToArray2 = (arr, num) => {
//     return arr.push(num);
// }

// const t0 = performance.now()
// pushNumberToArray1(arr1, 21); 
// const t1 = performance.now(); 
// console.log(`Time to complete: ${(t1 - t0)/1000}`); 

// const t2 = performance.now()
// pushNumberToArray2(arr1, 21); 
// const t3 = performance.now(); 
// console.log(`Time to complete: ${(t3 - t2)/1000}`); 

// Constant Time Complexity O(1): 

// ex1

arr1.push(1)

ex 2
arr1.indexOf(3)

ex 3 
const twoSum = (num1, num2) => {
    return num1 + num2
}

// Log Time Complexity O(log n)

const logTime = (arr) => {
    let numberOfLoops = 0; 

    for (let i = 1; i < arr.length; i *= 2) {
        numberOfLoops++
    }

    return numberOfLoops
}

// console.log(logTime(arr1))

// // Linear Time Complexity O(n)

// ex1 
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

// // ex2
// while (arr.length < 10) {
//     console.log(arr1)
// }

// // ex3
// arr1.forEach(num => console.log(num));

// // ex4
// arr1.map(num => num * 2)

// // ex5
// arr1.find(num => num < 10)

// // ex6 
// arr1.filter(num => num !== 3)

// Quadratic Time Complexity O(n^2)

// ex1 
for (let i = 0; i < arr1.length; i++) {
    for (let j = 1; i < arr1.length; j++) {
    }
}

// // ex2
for (let i = 0; i < arr1.length; i++) {
    const newArr = arr1.map(num => num * 2)
}

// for (let i = 0; i < arr1.length; i++) { // O(n)
//     for (let j = 1; i < arr1.length; j *= 2) { // O(log n)
//     }
// }

// Factorial Time Complexity O(n!)

// ex 1
const factorial = (n) => {
    let num = n; // num = 4

    if (n === 0) return 1; 
    for (let i = 0; i < n; i++) {
        num = n * factorial(n - 1); 
    }

    return num; 
}

console.log(factorial(5))

5 * 4 * 3 * 2 * 1


const doSomething = (arr1) => {
    for (let i = 0; i < arr1.length; i++) { // n
    }
    
    for (let j = 1; i < arr1.length; j++) { // n 
    }

    while (condition) {
        console.log('something')
    }
}

// n + n + n  ---> 3n ---> n  

arr1.push(1).pop() --> 1 + 1 ---> 2 ---> 1

const doSomething = (arr1) => {
    for (let i = 0; i < arr1.length; i++) { // n
        for (let j = 1; i < arr1.length; j++) { // n 
        }
    }

    for (let i = 0; i < arr1.length; i++) { // n
        for (let j = 1; i < arr1.length; j++) { // n 
        }
    } 
} // n^2 + n^2 ---> 2n^2 ---> n^2 

// consolidating time complexity

const someFunction1 = (arr1) => {
    let sum = arr1[1] + arr1[2];  // O(1)

    while (condition) { // O(n) * O(1) ---> O(n)
        for (let j = 1; i < arr1.length; j++) { // n -----> n^2
        }
    }

    for (let i = 0; i < arr1.length; i++) { // n
        for (let j = 1; i < arr1.length; j++) { // n -----> n^2
        }
    } 
}

// 1 + n^2 + n^2 ---> n + 2n^2 ---> n^2 

const someFunction2 = (arr1) => {
    arr1.push(1).pop() // 1

    for (let j = 1; i < arr1.length; j++) { // n
    }

    for (let j = 1; i < arr1.length; j++) { // n
    }

    for (let j = 1; i < arr1.length; j++) { // n^3
        for (let j = 1; i < arr1.length; j++) { 
            for (let j = 1; i < arr1.length; j++) { 
            }
        }
    }
}

// 1 + n + n + n^3 ---> n^3


// space complexity

// constant space O(1)

1
true 
undefined
null

// linear space O(n)

'this is a text'

[1, 2, 3, 4, 5]

const object = {
    name: 'tony'
}

// inserting
object.age = 44; // CONSTANT O(1) - Time Complexity

// delete 
delete object.age // CONSTANT O(1) - Time Complexity

// searching 

object.hasOwnProperty['name'] // Linear O(n) - Time Complexity 

for (const prop in object) {
    console.log(object[prop]) // Linear O(n) - Time Complexity
}

// accessing 
object.age // 44 // CONSTANT O(1) - Time Complexity

// retrieve keys
Object.keys(object) // Linear O(n) - Time Complexity

// retrieve values
Object.values(object) // Linear O(n) - Time Complexity

const arr2 = [1, 2, 3, 4, 5]

//inserting 1
arr2.push(8) // time complexity - O(1)

//inserting 2
arr2.unshift(8) // time complexity - O(n)

// removing 1
arr2.pop() // time complexity - O(1)

// removing 2
arr2.shift() // time complexity - O(n)

// searching 
const findNumber = arr2.find(num => num === 2) // time complexity - O(n)

// retreiving 
const getNumber = arr2[4] // time complexity - O(1)

// splice
arr2.splice(1, 1, 5) // time complexity - O(n)

// reduce
arr2.reduce((total, num) => total + num, 0) // time complexity - O(n)



