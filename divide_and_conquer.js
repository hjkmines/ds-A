// O(log(n)) - Binary Search

//[1, 2, 3, 4, 5, 6, 7, 8, 9]

const searchBinaryIterative = (array, val) => {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}

const searchBinaryRecursive = (array, val, min = 0, max = array.length - 1) => {
    let min = 0; 
    let max = array.length - 1

    if (min > max) return -1; 

    let middleIndex = Math.floor((min + max)/2); 
    let middleValue = array[middleIndex];

    if (middleValue === val) return middleIndex; 

    if (middleValue < val) {
        return searchBinaryRecursive(array, val, middleIndex + 1, max)
    } else {
        return searchBinaryRecursive(array, val, min, middleIndex - 1)
    }
}