function minMax(arr) {
    let minNum = [];
    let maxNum = []; 
    let result = [];
    let sortedArr = arr.sort()
    
    
    for (let i = 0; i < arr.length; i++){
      minNum = sortedArr[0];
      maxNum = sortedArr[sortedArr.length - 1];
    }
  result = minNum.concat(maxNum);
  return result;
}
console.log(minMax([5, 4, 3, 2, 1]))