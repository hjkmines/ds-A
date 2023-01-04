// create a function that accepts two arrays and return true 
// or false based on the frequency count

const sameBF = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false; 

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2)
        if (index === -1) return false; 
        arr2.splice(index, 1)
    }

    if (!arr2.length) return true
}