/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

// Time: O(n^2)
// Space: O(1)
const sumZeroQuadratic = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]; // fixated
            }
        }
    }
}

// Time: O(n)
// Space: 
const sumZeroLinear = (arr) => {
    let left = 0; 
    let right = arr.length - 1; 
    while (left < right) {
        let sum = arr[left] + arr[right]; 
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
}

console.log(sumZeroLinear([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZeroLinear([-2,0,1,3])) // undefined
console.log(sumZeroLinear([1,2,3])) // undefined
