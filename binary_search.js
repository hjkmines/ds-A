const arr1 = [1, 2, 4, 5, 6, 7]

const binaryRecursiveSearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return -1
  let middleIndex = Math.floor((start+end) / 2);
  
  if(arr[middleIndex] === target) {return middleIndex}
  else if (arr[middleIndex] > target){
    end = middleIndex - 1
    return binaryRecursiveSearch(arr, target, start, end)
  } else{
    start = middleIndex + 1
    return binaryRecursiveSearch(arr, target, start, end)
  }
  
} 

const binaryIterativeSearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1
  
  while (start < end ) {
    let middleIndex = Math.floor((start + end) / 2)
    if (target === arr.middleIndex) {
      return middleIndex;
    } else if(target < arr[middleIndex]){
      end = middleIndex - 1
    } else {
      start = middleIndex + 1
    }
  }
  
  return -1 
}