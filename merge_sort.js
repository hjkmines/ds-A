// recursive merge sort

// Merge sort
// 1. Create an empty array, take a look at the smallest values in each input array

// 2. While there are still values we haven't looked at...

// 3. If the value in the first array is smaller than the value in the second array, 
// push the value in the first array into our results and move on to the next value in the first array

// 4. If the value in the first array is larger than the value in the second array, 
// push the value in the second array into our results and move on to the next value in the second array

// 5. Once we exhaust one array, push in all remaining values from the other array

// 6. Break up the array into halves until you have arrays that are empty or have one element

// 7. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

// 8. Once the array has been merged back together, return the merged (and sorted!) array


const mergesort = (arr) => {
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length/2); 
    let left = mergesort(arr.slice(0, mid))
    let right = mergesort(arr.slice(mid))
    return mergesort(left, right)
}

//bubble sort uses O(n^2)
// merge sort uses O(n * log n)

const merge = (arr1, arr2) => {
    let results = []; 
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        results.push(arr1[j])
        j++
    }

    return results; 
}