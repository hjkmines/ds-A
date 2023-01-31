const binaryIterativeSearch = (nums, target) => {
    // declare the start and end
    let start = 0;  
    let end = nums.length - 1; 

    // base condition
    while (start <= end) {
        // find the middle point
        let middleIndex = Math.floor((start + end)/2)

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

const binaryRecursiveSearch = (nums, target, start = 0, end = nums.length - 1) => {
    // base condition
    if (start > end) return -1;

    // find the middle index
    let middleIndex = Math.floor((start + end)/2); 

    if (nums[middleIndex] === target) return middleIndex; 

    if (nums[middleIndex] < target) {
        return binaryRecursiveSearch(nums, target, middleIndex + 1, end)
    } else {
        return binaryRecursiveSearch(nums, target, start, middleIndex - 1)
    }
}

binaryRecursiveSearch(nums, target)