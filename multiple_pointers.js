/*
write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

// sumZero([-3, -2, -1, 0, 1, 2, -3]) // [-3, 3]
// sumZero([-3, -2, -1, 0]) // undefined
// sumZero([ -1, 0]) // undefined

const sumZero1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]]
        }
    }
}

const sumZero2 = (arr) => {
    //instantiate our pointers
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

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]))