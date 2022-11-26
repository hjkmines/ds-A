const arr = [1, 2, 3]
const arr1 = [1, 2, 3]

// Problem 1: 
// Write a functino called same, which accepts two arrays. 
// The function should return true if every value 
// in the array has its corresponding value in the scecond array as squared values
// The frequency of values must be the same!

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false 
same([1, 2, 3], [1, 4, 4]) //false 

// O(n^2) time complexity
// O(1) space complexity
const same1 = (arr1, arr2) => {
    // step 1: create edge cases to check if array sizes are the same!
    if (arr1.length !== arr2.length) return false; 

    // step 2: use a loop against the first array and check if the second array has that value 
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2)
        if (index === -1) return false; 
        // step 3: within the for loop, if the element is found, remove it from the second array
        arr2.splice(index, 1); //mutable 
    }

    if (!arr2.length) {
        return true
    } else {
        return false
    }
}

// time complexity: O(n)
// space complexity: O(1)
const same2 = (arr1, arr2) => {
    // step 1: Establish edge cases
    if (arr1.length !== arr2.length) return false; 

    // step 2: initialize my freqCounters for both arrays to keep track of the counts
    let freqCounter1 = {}; 
    let freqCounter2 = {}; 

    // step 3: for loop against each array separately to update the freqCounter objects!
    for (let num of arr1) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1
    }

    for (let num of arr2) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1
    }

    for (let key in freqCounter1) {
        // check to see if the keys match up in the arr2
        if (!(key ** 2 in freqCounter2)) return false; 

        // check to see if the values of occurences are the same!
        if (freqCounter1[key] !== freqCounter2[key ** 2]) return false; 
    }
    return true; 
}
