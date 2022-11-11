/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/

const same = (arr1, arr2) => {
    // check edge cases
    if (arr1.length !== arr2.length) return false; 

    let frequencyCounter1 = {}; 
    let frequencyCounter2 = {}; 
    for (let num of arr1) {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
    }
    for (let num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        //check if the key value is the squared value
        if(!(key * key in frequencyCounter2)) return false; 

        if (frequencyCounter1[key] !== frequencyCounter2[key * key]) {
            return false
        }
    }

    return true; 
}

// same([1,1, 2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)
