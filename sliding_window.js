// create a function called maxSubarray that calculates the max consecutive elements 
// in a window size n. 

const maxSubarray = (arr, n) => {
    // step 1: initialize our max and temp values
    let max = 0; 
    let temp = 0; 

    // step 2: edge cases
    if (!arr.length || n > arr.length) return; 

    // step 3: calculate our initial window sum 
    for (let i = 0; i < n; i++) {
        max += arr[i]; 
    }

    // step 4: temp equals to the max so they start at the same value
    temp = max; 

    for (let i = n; i < arr.length; i++) {
        // take our current max, subtract off the first element in the initial window, and add the new element to the max. 
        temp = temp - arr[i - n] + arr[n] 
        max = Math.max(temp, max)
    }

    return max; 
}