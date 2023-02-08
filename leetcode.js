// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the 
// trees.
function sortByHeight(a) {
    // if a is empty return undefined
      if(a.length === 0) return undefined // O(1)
    // use filter to return a new array with only people without trees
      let filteredArr = a.filter((num) => num > 0) // O(n)
      let sortedArr = filteredArr.sort((a, b) => a - b) // O(n)
    // sort the people in the array [3, 5, 6, 8] ---> [3, 0, 5, 0, 0, 0, 6, 8]
        let result = a.map((num) => { // O(n)
        if(num > 0){
          return sortedArr.shift() // O(n)
        } else {
                return 0
        }
      })
      return result;
    }
    
    const a1 = [3, 0, 6, 0, 10, 0, 5, 8] 
    
    console.log(sortByHeight(a1))