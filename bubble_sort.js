const arr = [8, 1, 2, 4, 6, 3, 5]

// 1. Start looping from with a variable called i the end of the array towards the beginning

// 2. Start an inner loop with a variable called j from the beginning until i - 1

// 3. If arr[j] is greater than arr[j+1], then we SWAP those values!

// 4. Return the sorted array!

const bubbleSort = (arr) => {
    // indicate if swaps happened or not
    let noSwap; 

    //Start looping from with a variable called i the end of the array towards the beginning

    // sets the limit of how far to sort to the right
    for (let i = arr.length - 1; i > 0; i--) {
        // set up a boolean to possibly swap 
        noSwaps = true; 
        // Start an inner loop with a variable called j from the beginning until i - 1
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]; 
                arr[j] = arr[j + 1]; 
                arr[j + 1] = temp; 
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr; 
}