//Find the max sub array in this array and return max sum. 

const arr1 = [2, 33, 20, 15, 20]
const k = 2; 
const maxSubarray = (arr, k) => {
    // initialize our max and temp sum
    let maxSum = 0; 
    let tempSum = 0; 

    // edge case to make sure array is NOT greater than sub window k
    if (arr.length < k) return null; 

    // calculate the initial window sum 
    for (let i = 0; i < k; i++) {
        maxSum += arr[i]; 
    }

    // set up our tempSum to start at the same value as maxSum
    tempSum = maxSum; //---> 35

    // set up sliding window
    // start at k because we already did a for loop at indexes 0, 1
    for (let i = k; i < arr.length; i++) {
        // grab the next sliding window, [2, 33] ---> new window of [33,20]

        //what we know....
        // k = 2, i = 2, initial max sum of [2, 33] = 35, we WANT now [33,20]
        tempSum = tempSum - arr[i - k] + arr[k]; 

        // compare the tempSum with the current "maxSum"
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum; 
}