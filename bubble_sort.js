// bubble sort

const bubbleSort = (arr) => {
    // start looping with a variable called i at the end of the array
    // towards the beginning as a "bookmark" of when the inner for loop should stop 
    for (let i = arr.length - 1; i > 0; i--) {
        // start an inner loop with a variable called j from the beginning to start swapping
        for (let j = 0; j < i; j++) {
            // check if arr[j] > arr[j+1] if so, swap
            if (arr[j].age.get('age') === arr[j+1].age.get('age')) {
                // hold a temp variable
                let temp = arr[j]; 
                // swap!
                arr[j] = arr[j + 1]
                arr[j + 1] = temp; 
            } else {
                // hold a temp variable
                let temp = arr[j]; 
                // swap!
                arr[j] = arr[j + 1]
                arr[j + 1] = temp; 
            }
        }
    }

    return arr
}

console.log(bubbleSort([3, 2, 6, 99, 33, 1]))