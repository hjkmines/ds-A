/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

const maxSubarray = (arr, k) => {
    if (arr.length < k) return null; 

    let maxSum = 0; 
    let tempSum = 0; 

    for (let i = 0; i < k; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum; 
    // [1, 8, 4, 2, 3], k = 2
    for (let i = k; i < arr.length; i++) {
                  // 9 - 1 + 4       
        tempSum = tempSum - arr[i - k] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum; 
}