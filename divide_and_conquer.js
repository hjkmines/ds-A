const nums = [1, 2, 3, 4, 5, 6, 7]
const target = 5

// log n - time complexity
// 1 - space complexity. 
const binarySearch = (nums, target) => {
    //declare the start and end points
    let start = 0; 
    let end = nums.length - 1; 

    // while loop: 
    // first retrieve the middle index
    // second, check if the middle value is the target, if so, return middle index, 
    // if else, if the middle value is less than the target, move the start index to the right of 
    // the middle index
    // else, if the mid value is greater than the target, we want to move the end index to the left

    while (start < end) {
        let middleIndex = Math.floor((start + end) / 2); 

        if (nums[middleIndex] === target) {
            return middleIndex
        } else if (nums[middleIndex] < target) {
            start = middleIndex + 1
        } else {
            end = middleIndex - 1
        }
    }
    
    return -1 // did not find our target value
}