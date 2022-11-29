/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

// O(n^2) - time 
// O(1) - space
const solution = (arr1, arr2) => {
    // step 1: establish my edge case
    if (arr1.length !== arr2.length) return false; 

    // step 2: loop through the arr1 and we are going to retrieve the index of the
    // squared value from arr1. If the index was not found and returns -1, 
    // we will automatically return false

    // if we found the index, we are going to "check it off" by removing the found value 
    // from the arr2

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2); 
        if (index === -1) return false; 

        arr2.splice(index, 1)
    }

    // check if the arr size is empty, if so, we can return true, else return false
    if (!arr2.length) {
        return true; 
    } else {
        return false; 
    }
}

// n - time complexity
// 1 - space complexity
const solution2 = (arr1, arr2) => {
    // step 1: establish my edge case
    if (arr1.length !== arr2.length) return false; 

    // step 2: set up our frequency counter objects for both arrays
    let freqCounter1 = {};
    let freqCounter2 = {};

    // step 3: for loop to update the frequency counter objects
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    // step 4: for loop to loop through the first object to check if the squared value 
    // exists in the key in the second object and check if the frequency also matches up
    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false
        }
        if (freqCounter1[key] !== freqCounter2[key **2]) {
            return false
        }
    }

    return true; 
}