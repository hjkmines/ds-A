// write a function called sumZero which accepts a sorted array of intergers
// the functino should find the first pair where the sum is zero, 
// return a array that includes both values that sum to zero, otherwise return undefined!

//BRUTE FORCE
// time complexity O(n^2)
const sumZeroBruteSolution = (arr) =>{
    //edge cases
    if (arr[0] >= 0) return undefined

    // step 2: create nested for loops to find the pairs equal to zero
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]]
        }
    }
}

//Multiple Pointers pattern

// time complexity O(n)
const sumZeroMP = (arr) => {
    let left = 0; 
    let right = arr.length - 1; 

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--; 
        } else {
            left++
        }
    }
}

console.log(sumZeroBruteSolution([-2, -1, 0, 1, 2])) // [-2, 2]
console.log(sumZeroBruteSolution([-2, -1, 0])) // undefined 