// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might  
// get long pressed, and the character will be typed 1 or more times. 
 
// You examine the typed characters of the keyboard. Return True if it is possible that it was your 
// friends name, with some characters (possibly none) being long pressed. 
 
// Example 1:
 
// Input: name = "alex", typed = "aaleex" 
// Output: true 
// Explanation: 'a' and 'e' in 'alex' were long pressed. 

// Example 2: 
 
// Input: name = "saeed", typed = "ssaaedd" 
// Output: false 
// Explanation: 'e' must have been pressed twice, but it was not in the typed output. 
  
 
// Constraints: 
 
// 1 <= name.length, typed.length <= 1000 
// name and typed consist of only lowercase English letters. 
 
var isLongPressedName = function(name, typed) { 
    // edge cases
    if (name.length < 1 || typed.length > 1000 || typed.length < name.length) return false; 

    // set up our pointers
    let namePtr = 0; 
    let typedPtr = 0; 

    while (namePtr < name.length || typedPtr < typed.length) {
        if (name[namePtr] === typed[typedPtr]) {
            namePtr++; 
            typedPtr++; 
        } else if (name[namePtr - 1] === typed[typedPtr]) {
            typedPtr++; 
        } else {
            return false; 
        }
    }

    return true; 
}; 


// Given an array nums containing n distinct numbers in the range [0, n], return the only number in  
// the range that is missing from the array. 
 
// Example 1: 
 
// Input: nums = [3,0,1] 
// Output: 2 
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the 
// missing number in the range since it does not appear in nums. 

// Example 2: 
 
// Input: nums = [0,1] 
// Output: 2 
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the 
// missing number in the range since it does not appear in nums. 

// Example 3: 
 
// Input: nums = [9,6,4,2,3,5,7,0,1] 
// Output: 8 
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the 
// missing number in the range since it does not appear in nums. 
 
// Constraints: 
 
// n == nums.length 
// 1 <= n <= 104 
// 0 <= nums[i] <= n 
// All the numbers of nums are unique. 
  
/** 
 * @param {number[]} nums 
 * @return {number} 
 */ 
const missingNumber = (nums) => { 
    let sum = 0; 
    for (let i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i]
    }

    return sum 
}; 
 
[3,0,1]
 
 // first loop: sum = 0 + 1 - 3 = -2
 // second loop: sum = 1 + 1 - 0 - 2 = 0
 // third loop: sum = 2 + 1 - 1 + 0 = 2 
 



 
