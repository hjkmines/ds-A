const arr = [6, 4, 125, 10]

console.log(arr.sort((a, b) => a - b))

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]; 
                arr[j] = arr[j + 1]; 
                arr[j + 1] = temp; 
            }
        }
    }
}