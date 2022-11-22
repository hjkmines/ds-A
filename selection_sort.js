// 1. Store the first element as the smallest value you've seen so far

// 2. Compare this item to the next item in the array until you FIND a smaller number. 

// 3. if a smaller number is found, designate that smaller number to be the new "min"
// and continue unitl the end of the array

// 4. if the "min" is not the value (index) you initially began with, swap the values. 

// 5. repeat this with the next element until the array is sorted

// swaps two values 
const swapValues = (arr, index1, index2) => {
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; 
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // Store the first element as the smallest value you've seen so far
        let lowest = i; 
        //Compare this item to the next item in the array until you FIND a smaller number.
        for (let j = i + 1; j < arr.length; j++) {
            //if a smaller number is found, designate that smaller number to be the new "min"
            // and continue unitl the end of the array
            if (arr[lowest] > arr[j]) lowest = j 
        }
        // 4. if the "min" is not the value (index) you initially began with, swap the values. 
        if (i !== lowest) swapValues(arr, i, lowest)
    }

    return arr; 
}