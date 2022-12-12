// constant time complexity

// ex 1
const twoSum = (num1, num2) => {
    return num1 + num2
}

// ex 2
const arr1 = [1, 2, 3, 4, 6]
const getNumber = arr1[2]

// ex 3
arr1.push(8)

// ex 4
arr1.pop()

// log time complexity O(log n)

const logTime = (arr) => {
    let numberOfLoops = 0; 

    for (let i = 1; i < arr.length; i *= 2) {
        numberOfLoops++
    }

    return numberOfLoops
}

console.log(logTime([1])) // 0 loops
console.log(logTime([1, 2])) // 1 loops
console.log(logTime([1, 2, 3, 4])) // 2 loops

// Linear Time Complexity O(n)

for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}

while (arr.length < 10) {
    console.log(arr)
}

arr1.forEach(num => console.log(num))

arr1.map(num => console.log(num))

// Quadratic time Complexity

for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
        
    }
}

for (let index = 0; index < array.length; index++) {
    while (condition) {
      for (let index = 0; index < array.length; index++) {
          for (let index = 0; index < array.length; index++) {
          }  
      }  
    }
}


// ignoring constants

// 3n ---> n 
for (let index = 0; index < array.length; index++) {
    
}

for (let index = 0; index < array.length; index++) {
    
}

for (let index = 0; index < array.length; index++) {
    
}

// becomes 2 but reduces to 1
arr1.push(8).pop()


// becomes 2n^2 just becomes to n^2
for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
    }
}

for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
    }
}

// consolidating time complexity 

const someFunction1 = (arr1) => {
    let sum = arr[1] + arr[2] //1

    while (condition) { //n
        sum = arr[3] + arr[5] //1
    }

    for (let index = 0; index < array.length; index++) {
        for (let index = 0; index < array.length; index++) {
        }
    }
}


const sumZero = (arr) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }        
    }
}

// 2 + n + n^2 ---> n^2


// space complexity

// constant space 
// numbers
// booleans
// undefined
// null

// linear space
// string
// arr
// object
// map
// set 

const returnDuplicates = (arr) => {

    // do something 

    return arr
}