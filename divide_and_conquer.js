// given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the function is 
// located, if not found, let's return -1. 


// O(n)
const searchLinear = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i; 
        }
    } 
    return -1 
}

const searchBinary = (arr, val) => {
    let start = 0; 
    let end = arr.length - 1; 

    while (start < end) {
        let midPointIndex = Math.floor((start + end) / 2); 
        let midPointValue = arr[midPointIndex]; 

        if (midPointValue < val) {
            start = midPointIndex + 1; 
        } else if (midPointValue > val) {
            end = midPointIndex - 1; 
        } else {
            return midPointValue
        }
    }

    return -1 
}