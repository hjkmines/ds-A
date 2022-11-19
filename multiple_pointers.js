const arr1 = [-2, -1, 0, 1, 2, 3, 4, 5]

// Brute Force 

const sumZero1 = (arr) => {
    // Set up a nested for loop with two pointers where one starts at the beginning
    // and another one that starts ahead of the first pointers (ALWAYS)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

const sumZero2 = (arr) => {

    .sort()
    // set up pointers
    let left = 0; 
    let right = arr.length - 1; 

    while (left < right) {
        let sum = arr[left] + arr[right]; 

        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--; 
        } else {
            left++
        }
    }
}

console.log(sumZero2(arr1))