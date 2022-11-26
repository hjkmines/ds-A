// Given a sorted asc array of nums, and a target value, write a function that searches for the
// target in nums, and return the target index, otherwise, return -1 if not found

const arr1 = [1, 2, 3, 4, 5, 6, 8, 9]
const target = 5; 

arr1.find(num => num === target) // O(n)

// time complexity O(log n)
// space complexity O(1)
const binarySearch = (nums, target) => {
    // step 1: edge case
    if (!nums.length) return -1 

    // initialize our pointers at the ends of the array
    let start = 0; 
    let end = nums.length - 1; 

    //set up our while loop, where it exits when start > end which means there is no target value in the array
    while (start < end) {
        // find the middle index 
        let middleIndex = Math.floor((start + end)/2)

        //first check if the middle value is equal to target
        if (nums[middleIndex] === target) {
            return middleIndex; 
        } else if (nums[middleIndex] < target) {
            start = middleIndex + 1
        } else {
            end = middleIndex - 1
        }
    }

    return -1;
}