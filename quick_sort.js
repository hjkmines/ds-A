// 1. call the povit helper on the array

// 2. When the helper return to you the updated pivot index, 
// recursively call the pivot helper on the subarray to the left of that index, 
// and the subarray to the right of that index

// 3. Your base case occurs when you consider a subarray with less than 2 elements

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); 
        
        //left
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr; 
}

// 1. It will help to accept 3 args: array, a start index, and end index
// 2. Grab the pivot from the start of the array
// 3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// 4. Loop through the array from the start until the end
// 5. If the pivot is greater than the current element, increment the pivot index variable 
// and then swap the current element with the element at the pivot index
// 6. Swap the starting element (e.g. pivot) with the pivot index
// 7. Return pivot index

const swap = (arr, index1, index2) => {
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; 
}

const pivot = (arr, left = 0, right = arr.length - 1) => {
    // 2. Grab the pivot from the start of the array
    let pivot = arr[left]; 
    // 3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    let swapIndex = left; 

    // 4. Loop through the array from the start until the end
    for (let i = left + 1; i < right; i++) {
        // 5. If the pivot is greater than the current element, increment the pivot index variable 
        // and then swap the current element with the element at the pivot index
        if (pivot > arr[i]) {
            swapIndex++; 
            swap(arr, swapIndex, i)
        }
    }

    // 6. Swap the starting element (e.g. pivot) with the pivot index
    swap(arr, left, swapIndex)
    // 7. Return pivot index
    return swapIndex; 
}