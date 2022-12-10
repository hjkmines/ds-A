const merge = (arr1, arr2) => {
    let results = []; 
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]); 
            i++
        } else {
            results.push(arr2[j]); 
            j++
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]); 
        i++
    }

    while (j < arr2.length) {
        results.push(arr2[j]); 
        j++
    }

    console.log('results', results);

    return results; 
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length/2); 
    console.log('mid', mid)
    let left = mergeSort(arr.slice(0,mid)); 
    console.log('left', left)
    let right = mergeSort(arr.slice(mid)); 
    console.log('right', right)
    return merge(left, right)
}

mergeSort([4, 3, 99, 88])

