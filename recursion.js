const someFunction1 = (num) => {
    let total = num
    for (let index = 0; index < 8; index++) {
        total++
    }

    return total
}

const someFunction2 = (num) => {
    if (num === 8) return num // base case path
    someFunction1(num + 1) // recursive path
}

someFunction2(0)

// iterative: 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const binaryIterativeSearch = (nums, target) => {
    // edge cases
    if (!nums.length) return -1 

    // decleare a start and end
    let start = 0; 
    let end = nums.length - 1; 

    while (start < end) {
        // find the middle index 
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

const binaryRecursiveSearch = (nums, target, start = 0, end = num.length - 1) => {
    // base case
    if (start > end) return -1; 

    // find the middle index
    let middleIndex = Math.floor((start + end)/2)

    if (nums[middleIndex] === target) return middleIndex; 

    if (nums[middleIndex] > target) {
        return binaryRecursiveSearch(nums, target, start, middleIndex - 1)
    } else {
        return binaryRecursiveSearch(nums, target, middleIndex + 1, end)
    }
}

binaryIterativeSearch(nums, 9)



const test = (text, optional = 8) => {
    console.log(text, optional)
}

// console.log(test('hi', 5))

const unsorted = [6, 4, 125, 10]

console.log(unsorted.sort((a, b) => a - b))