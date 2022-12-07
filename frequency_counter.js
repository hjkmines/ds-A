/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

// O(n^2)
const sameQuadratic = (arr1, arr2) => {
    //edge case
    if (arr1.length !== arr2.length) {
        return false; 
    }

    // set up our for loop 
    for (let i = 0; i < arr1.length; i++) { // O(n)
        let index = arr2.indexOf(arr1[i] ** 2)
        if (index === -1) {
            return false
        }

        // once we seen it, remove it!
        arr2.splice(index, 1) // O(n)
    }

    if (!arr2.length) {
        return true; 
    }
}

// O(n)
const sameLinear = (arr1, arr2) => {
     //edge case
     if (arr1.length !== arr2.length) {
        return false; 
    }

    let freqCounter1 = {}; 
    let freqCounter2 = {}; 

    //loop through each array and update the counter objects
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        freqCounter1[val] = (freqCounter2[val] || 0) + 1
    }

    //loop through first object
    for (let key in freqCounter1) {
        // check if the squared value of the key exists in the second obj
        if (!(key ** 2 in freqCounter2)) {
            return false
        }

        // check if the frequency values match!
        if (freqCounter1[key] !== freqCounter2[key ** 2]) {
            return false
        }
    }

    return true; 
}