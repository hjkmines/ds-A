// example 1: 

// iterative method

const factorialIterative = (num) => {
    let total = 1; 
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total; 
}

5 * 4 * 3 * 2 * 1

const factorialRecursive = (num) => {
    // base case
    if (!num) return 1; 
    return num * factorialRecursive(num - 1)
}

5 * 4 * 3 * 2 * 1

// Problem: Given a array of numbers, return a new array with just odd numbers
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const collectOddValues = (arr) => {
    let newArr = []; 
    console.log(arr)

    if (!arr.length) return newArr; 

    if (arr[0] % 2 !== 0) newArr.push(arr[0]); 

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr; 
}

collectOddValues(arr1)

// Problem statement: Given a sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

const binarySearchIterative = (arr, target) => {
    let min = 0; 
    let max = arr.length - 1; 

    while (min < max) {
        let middleIndex = Math.floor((min + max)/2);

        if (target === arr[middleIndex]) {
            return middleIndex; 
        } else if (arr[middleIndex] < target) {
            min = middleIndex + 1; 
        } else {
            max = middleIndex - 1; 
        }
     }

    return -1; 
}

const binarySearchRecursive = (arr, target, min = 0, max = arr.length - 1) => {
    if (min > max) return -1 // edge case

    // find the middle index 
    let middleIndex = Math.floor((start + end) / 2); 

    // if the middle element is the target, if so, return the target index
    if (arr[middleIndex] === target) return middleIndex // base condition

    // if the middle element is smaller than target, move the start index to middle + 1 else end index to middle - 1
    if (arr[middleIndex] < target) {
        return binarySearchRecursive(arr, target, middleIndex + 1, max)
    } else {
        return binarySearchRecursive(arr, target, min, middleIndex - 1)
    }
}


// example 12: collect Strings

// Write a function called collectStrings which accepts an object and returns 
// an array of all the values in the object that have a typeof string

collectStrings(obj) // ["hello", "byeeee", "jeeee"]


obj = {
	value1: {}, 
  value2: {
    value6: 'hahaha'
  }, 
  value3: 'byeeee', 
  value4: 'jejeje', 
  value5: {}
}

const collectStrings = (obj) => {
  let arr = ['hahaha', 'byeeee', 'jejeje']       
  
  // to check a empty array 
  if (!Object.keys(obj).length) return arr; 
  
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
			arr = arr.concat(collectStrings(obj[key]))
    }
  }
  return arr;
}









