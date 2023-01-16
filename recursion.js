const sumRange = (num) => {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

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

const binaryRecursiveSearch = (array, target, start = 0, end = array.length - 1) => {
    let start = 0
    let end = array.length - 1
    // base condition
    if (start > end) return -1

    let middleIndex = Math.floor((start + end) / 2); 

    if (array[middleIndex] === target) return middleIndex; 

    if (array[middleIndex] < target) {
        return binaryRecursiveSearch(array, target, middleIndex + 1, end)
    } else {
        return binaryRecursiveSearch(array, target, start, middleIndex - 1)
    }
}