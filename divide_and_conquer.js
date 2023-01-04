// Given a sorted array of integers, write a functin called search, 
// that accepts a val and array, return the index

const search = (array, val) => {
    let start = 0; 
    let end = array.length - 1; 

    while (start <= end) {
        let middleIndex = Math.floor((start + end) / 2); 
        let middleValue = array[middleIndex]; 

        if (middleValue < val) {
            start = middleIndex + 1; 
        } else if (middleValue > val) {
            end = middleIndex - 1; 
        } else {
            return middleValue
        }
    }

    return -1; 
}