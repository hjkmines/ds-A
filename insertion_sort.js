// 1. Start by picking the second element in the array

// 2. Now compare the second element with the one BEFORE it and swap if necessary

// 3. Continue to the next element and if it is in the incorrect order, 
// iterate through the sorted portion
// (i.e. the left side of the array) to place the element in the correct place

// 4. repeat until array is sorted

const insertionSort = (arr) => {
    let currValue; 
    // 1. For loop: Start by picking the second element in the array
    for (let i = 1; i < arr.length; i++) {
        currValue = arr[i]; 
        // 2. Now compare the second element with the one BEFORE it and swap if necessary
        for (let j = i - 1; j >= 0 && arr[j] > currValue; j--) {
            arr[j+1] = arr[j]
        }
        // 3. Continue to the next element and if it is in the incorrect order, 
        // iterate through the sorted portion
        // (i.e. the left side of the array) to place the element in the correct place
        arr[j+1] = currValue; 
    }

    return arr; 
}