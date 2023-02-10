/*
Given a sorted array of integers, write a function called search,
that accepts a value and returns the index where the value passed to the function is located. 
If the value is not found, return -1
*/

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

const searchBinary = (arr, target) => {
    let left = 0; 
    let right = arr.length - 1; 

    while (left <= right) {
        let middleIndex = Math.floor((left + right)/2); 
        let middleValue = arr[middleIndex]; 

        if (middleValue === target) {
            return middleIndex
        } else if (middleValue < target) {
            left = middle + 1; 
        } else {
            right = middle - 1; 
        }
    }

    return -1; 
}

const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return -1; 

    let middleIndex = Math.floor((left + right)/2); 
    let middleValue = arr[middleIndex]; 

    // base case 
    if (middleValue === target) return middleIndex; 

    if (middleValue < target) {
        return binarySearchRecursive(arr, target, middleIndex + 1, right)
    } else {
        return binarySearchRecursive(arr, target, left, middleIndex - 1)
    }
}