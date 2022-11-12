const performance = require('perf_hooks').performance;

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

const pushNumberToArray1 = (arr, num) => {
    const lastIndex = arr.length - 1; 
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex ) {
        arr.splice(lastIndex, 0, num); 
        }
    }

    return arr
}
  
const pushNumberToArray2 = (arr, num) => {
    return arr.push(num);
}

const t0 = performance.now(); 
    pushNumberToArray1(arr1, 11); 
const t1 = performance.now(); 
console.log(`Time to complete: ${(t1 - t0)/1000}`)

const t2 = performance.now(); 
    pushNumberToArray2(arr1, 11); 
const t3 = performance.now(); 
console.log(`Time to complete: ${(t3 - t2)/1000}`)

// Constant Time Complexity O(1)

// ex1
arr1.push(1)

// ex2
const getNumber = arr1[3]; 

// ex3
const twoSum = (num1, num2) => {
    return num1 + num2; 
}

// Log Time Complexity O(log n)

// ex1
const logTime = (arr) => {
	let numberOfLoops = 0; 
  
  for(let i = 1; i < arr.length; i *=2) {
		numberOfLogs++
	}
  
  return numberOfLoops
}

let loopsA = logTime([1]) // 0 loops
let loopsB = logTime([1, 2]) // 1 loops
let loopsC = logTime([1, 2, 3, 4]) // 2 loops

// Linear Time Complexity O(n)

// ex1
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]); 
}

// ex2
while (arr.length < 10) {
    console.log(arr)
}

// ex3
arr1.forEach(num => console.log(num))

// ex4
arr1.map(num => num * 2); 

// ex5
arr1.find(num => num === 5)

// Quadratic Time Complexity O(n^2)

// ex 1
for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]); 
    }    
}

// ex 2
for (let i = 0; i < arr1.length; i++) {
    const newArr = arr1.map(num => num * 2)
}

// Factorial Time Complexity O(n!)

// ex1
const factorial = n => {
    let num = n;

    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
        num = n * factorial(n - 1);
    };

    return num;
};

// Ignoring constants

// ex1
//becomes 3n but reduces to n
for (let i = 0; i < arr1.length; i++) {
    console.log('do something 1')
}
for (let i = 0; i < arr1.length; i++) {
    console.log('do something 2')
}
for (let i = 0; i < arr1.length; i++) {
    console.log('do something 3')
}

// ex2
// becomes 2 but reduces to 1
arr1.push(1).pop()

// ex3
// becomes 2n^2 but reduces to n^2
for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr1.length; i++) {
        console.log('do something 3')
    }
}

for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr1.length; i++) {
        console.log('do something 3')
    }
}

// Consolidating time complexity

// ex1
// 2 + 2n + n^2 --> n^2
const someFunction1 = (arr1) => {
    let sum = arr1[1] + arr[2]
    
    while (condition) {
        sum = arr[5] + arr[7]
    }
  
    for (let i = 0; i < arr1.length; i++) {
        for (let i = 0; i < arr1.length; i++) {
            for (let i = 0; i < arr1.length; i++) {
                console.log('do something 3')
            }
        }
    }
}

// ex2
const someFunction2 = (arr1) => {
    arr1.push(1).pop()
    
    for (let i = 0; i < arr1.length; i++) {
        console.log('do something 2')
    }
    
    for (let i = 0; i < arr1.length; i++) {
        console.log('do something 3')
    }
    
    for (let i = 0; i < arr1.length; i++) {
        for (let i = 0; i < arr1.length; i++) {
            console.log('do something 3')
        }
    }
}

// Space complexity

// constant space
const number = 1; 
const boo = true; 
const undef = undefined; 
const nulls = null; 

// linear space
const text = 'this'
const arr = [1, 2, 3, 4, 5]

const obj = {
    name: 'tony'
}
//inserting
obj.age = 44; 

//removing 
delete obj.age; 

//searching 1
obj.hasOwnProperty['name']

//searching 2
for (const prop in obj) {
    console.log(obj[prop])
}

//accessing
obj.age //44

//retrieving keys
Object.keys(obj)

//retrieving values
Object.values(obj)


const arr2 = [1, 2, 3, 4, 5, 6, 7]; 

//inserting 1
arr2.push(8)

//inserting 2
arr2.unshift(0)

//removing 1
arr2.pop()

//removing 2
arr2.shift()

//searching 1
const findNumber = arr2.find(num => num === 2)

//searching 2
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 2) {
        return arr2[i]
    }
}

//retrieving 
const getNumber = arr2[3]

//method 1
const double = arr2.map(num => num * 2)

//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5) 

//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) 

//method 4
for (const num of nums) {
    console.log(num * 2)
}

//method 5
const convertToString = arr2.join(' ')

//method 6
const reversed = arr2.reverse(); 