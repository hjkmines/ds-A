// write a function where its called sumZero which accepts a sorted array of integers. 
// the function should find the first pair equal to 0. 

// time: n^2 - nested for loops
// space: 1 - returning a fixated array
const sumZeroBF = (arr) => {
// edge cases
if (arr.length <= 1 || arr[0] >= 0) return undefined; 

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]]
        }
    }
}

// time: n
// sapce: 1
const sumZeroLinear = (arr) => {
    let left = 0; 
    let right = arr.length - 1; 

    while (left < right) {
        let total = arr[left] + arr[right]; 

        if (total === 0) {
            return [arr[i], arr[j]]
        } else if (total > 0) {
            right--
        } else {
            left++
        }
    }
}

console.log(sumZeroBF([-3, -2, -1, 0, 1, 2, 3]))