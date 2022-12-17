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


const data = { 
    results: { 
        payload: [
           { 
                profile: { 
                    name: 'John',  
                    rank: 2,  
                    favorites: [ 
                        { 
                            title: 'Hulk',  
                            rating: 1 
                        }, 
                        { 
                            title: 'Top Gun',  
                            rating: 8 
                        } 
                    ] 
                } 
            }, 
            { 
                profile: { 
                    name: 'Tony',  
                    rank: 9,  
                    favorites: [ 
                        { 
                            title: 'Spider-Man',  
                            rating: 5 
                        }, 
                        { 
                            title: 'Spongebob',  
                            rating: 9 
                        } 
                    ] 
                } 
            }
        ] 
    } 
} 

// To sort the data object by ascending order by rating and then by rank using merge sort, you can follow these steps:
// Write a function merge that takes in two sorted arrays and returns a new sorted array by merging the two arrays.
// Write a function mergeSort that takes in an array and uses recursion to divide the array into smaller subarrays until each subarray has only one element. Then, the function merges the subarrays back together in sorted order using the merge function.
// Use the mergeSort function to sort the array of objects by rating and then by rank.
// Here is an example of how you could implement these steps:

function merge(arr1, arr2) {
  // Create a new empty array to store the merged result
  let merged = [];

  // Set variables to track the current index in each array
  let i = 0;
  let j = 0;

  // Loop while there are still elements in either array
  while (i < arr1.length || j < arr2.length) {
    // If both arrays have elements, compare the elements and add the smaller one to the merged array
    if (i < arr1.length && j < arr2.length) {
      if (arr1[i].profile.favorites[0].rating < arr2[j].profile.favorites[0].rating || 
(arr1[i].profile.favorites[0].rating === arr2[j].profile.favorites[0].rating && arr1[i].profile.rank < arr2[j].profile.rank)) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }

    // If only the first array has elements, add its element to the merged array
    } else if (i < arr1.length) {
      merged.push(arr1[i]);
      i++;

    // If only the second array has elements, add its element to the merged array
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Return the merged array
  return merged;
}

function mergeSort(arr) {
  // If the array has only one element, return it
  if (arr.length === 1) {
    return arr;
  }

  // Split the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort the left and right halves
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge the sorted left and right halves and return the result
  return merge(left, right);
}

// Use the mergeSort function to sort the array of objects by rating and then by rank
let sortedData = mergeSort(data.results.payload);