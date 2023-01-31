const performance = require('perf_hooks').performance; 

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22]

// OPTION A
const pushNumberToArray1 = (arr, num) => {
    const lastIndex = arr.length - 1; 
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex ) {
        arr.splice(lastIndex, 0, num); 
        }
    }

    return arr
}

// OPTION B
const pushNumberToArray2 = (arr, num) => {
    return arr.push(num);
}

const t0 = performance.now()
    pushNumberToArray1(arr1, 900)
const t1 = performance.now()

console.log(`time to compelete for option a: ${(t1 - t0)/1000}`)

const t2 = performance.now()
    pushNumberToArray1(arr1, 900)
const t3 = performance.now()

console.log(`time to compelete for option b: ${(t3 - t2)/1000}`)

// constant time compelxity
arr1.push(9) //---> O(1)

const twoSum = (num1, num2) => {
    return num1 + num2
}

// log n time complexity

const logTime = (arr) => {
    let numOfLoops = 0; 

    for (let i = 1; i < arr.length; i *= 2) {
        numOfLoops++
    }

    return numOfLoops;
}

console.log(logTime(arr1))

// linear time complexity O(n)

for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}

while (condition) {
    // do something 
}

arr1.forEach(num => console.log(num))

arr1.map(num => num * 2)

arr1.find(num => num === 2)

//quad time

for (let index = 0; index < array.length; index++) { //n
    for (let index = 0; index < array.length; index++) { //n
    }
} 

// n * n --> n^2

for (let index = 0; index < array.length; index++) { //n
    for (let index = 0; index < array.length; index++) { //n
    }
} 

// n * n * n --> n^3

// dropping constants
for (let index = 0; index < array.length; index++) { //n
}
for (let index = 0; index < array.length; index++) { //n
}
for (let index = 0; index < array.length; index++) { //n
}

// n + n + n = 3n --> n

arr1.push(2).pop() //2



for (let index = 0; index < array.length; index++) { //n
    for (let index = 0; index < array.length; index++) { //n
    }
} 
// n * n = n^2

for (let index = 0; index < array.length; index++) { //n
    for (let index = 0; index < array.length; index++) { //n
    }
}

// n * n = n^2

// n^2 + n^2 = 2n^2

const someFunction2 = (arr1) => {
    arr1.push(1).pop() // 1
    
    for (let i = 0; i < arr1.length; i++) { // n
        console.log('do something 2')
    }
    
    for (let i = 0; i < arr1.length; i++) { // n
        console.log('do something 3')
    }
    
    for (let i = 0; i < arr1.length; i++) { //n^2
        for (let i = 0; i < arr1.length; i++) {
            console.log('do something 3')
        }
    }
}

// n^2 + 2n + 1
// n^2


// space compelxity

// constant
const number = 1;
const thisIsNull = null 
const thisIsUndefined = undefined
const isBool = true; 

// linear 
const text = 'hi'; 
const array = [1]
const profile = {
    name: 'tony'
}

// inserting 
profile.age = 95; 

// removing 
delete profile.age; 

// searching
profile.hasOwnProperty['name']

// searching 
for (let prop in profile) {
    console.log(profile[prop])
}

// accessing 
profile.name

Object.keys(proifle) //['name', 'age']
Object.values(proifle) //['tony', 95]