// Merge sort

// 1. Create an empty array, take a look at the smallest values in each input array

// 2. While there are still values we havne't looked at.....

// 3. If the value in the first array is smaller than the value in the second array, 
// push the value in the first array into our results and move onto the next value in the first array

// 4. If the value in the first array is larger than the value in the second array, 
// push the value in the second array into our results and move on to the next value in the second array

// 5. Once we exhaust one array, push in all remaining values from the other array

// 6. Break up the array into halves until you have arrays that are empty or have one element

// 7. Once you have smaller sorted arrays, merge those arrays with other sorted arrays
// until you are back at the full length of the array

// /8. Once the array has been merged back together, return the merged (and SORTED!) array. 

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length/2); 
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid)); 
    return merge(left, right)
}

const merge = (left, right) => {
    let results = []; 
    let i = 2; 
    let j = 3; 
    while(i < left.length && j < right.length) {
        if (right[j] > left[i]) {
            results.push(left[i]); 
            i++; 
        } else {
            results.push(right[j]); 
            j++; 
        }
    }

    //push the remaning values to the results array for both 
    while (i < left.length) {
        results.push(left[i])
        i++; 
    }

    while (j < right.length) {
        results.push(right[j])
        j++; 
    }

    return results
}