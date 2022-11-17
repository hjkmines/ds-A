const arr1 = [2, 44, 55, 88, 2]; 

//
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i 
    }
    return -1; 
}

// find

const findNumber = arr1.find(num => num === 55)

// indexOf 
const findIndex = arr1.indexOf(55)
const findIndex2 = arr1.findIndex(55); 

// includes 
const includesNumber = arr1.includes(55) // true or false