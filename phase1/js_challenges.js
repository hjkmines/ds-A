// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }


// // 'bob' --> 'bob'
// // 'Maria' --> 'airam'
// // 'deed' ---> 'deed'

// const isPalindrome = (str) => {
//     if(str.toLowerCase() === str.split('').reverse().join('').toLowerCase()){
//         console.log(true)
//         return true
//     } else {
//         console.log(false)
//         return false
//     }
// }

// // isPalindrome('Bob');

// // apples ---> 'even'
// // maria ---> 'odd'
// const oddOrEven = (str) => {
//     if(str.length % 2 === 0) {
//         console.log(`${str} is even`)
//         return 'even'
//     } else {
//         console.log(`${str} is odd`)
//         return 'odd'
//     }
    
// }

// oddOrEven('Maria')

// // Fizz Buzz

// // if odd, "fizz", 
// // if even , "buzz", 
// // if number is dividible by 3 and 5, "fizzbuzz"

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const fizzBuzz = (arr) => {
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             console.log('fizz');
//         } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//             console.log('buzz')
//         } else {
//             console.log('fizzbuzz')
//         }
//     }
// }


// // create a function that returns a integer in reverse javascript
// // 5683 ---> 3865
// function reverseInt(int) {
//     const test = int.toString().split('').reverse().join('')
//     const realNumber = parseInt(test)
//     console.log(typeof realNumber);
//     return realNumber
// }
// reverseInt(5683)

// // filter out even number
// const arr1 = [1, 3, 5, 8, 9] 
// const filtered = arr1.filter(num => num % 2 === 1)

// console.log(filtered)

// function capitalizeLetters(str) {
//     const capitalized = str.toLowerCase().split(' ')
//     for (i = 0; i < capitalized.length; i++) {
//         capitalized[i] = capitalized[i].charAt(0).toUpperCase() + capitalized[i].substring(1);
//     }
//     return capitalized.join(' ')
// }
// // capitalizeLetters('i love javascript') ---> ['i', 'love', 'javascript']

// // Return the longest word of a string

// //for loop that iterates through each word
// //compare the length of each word -> if()
// //return the longest word

// function longestWord(string) {
//     const arrayWords = string.split(' ')
//     let longestWord = ''
//     for(let i = 0; i < arrayWords.length; i++) {
//        if(arrayWords[i].length > longestWord.length) {
//          longestWord = arrayWords[i]
//        }
//     }
//     console.log(longestWord)
// }
// longestWord('This is a really lonnnnnnng string')


// Given an integer array nums, return the only number that occurs twice, 
// other numbers occur only once

//if(occurs twice ) console.log (number that appears twice)
// else console.log(numbers that appear once)

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,1,2,2,3,4,4,4,5,6]
// Output: false

var containsDuplicate = function(nums) {
    let frequency = {}; 

    for(let i = 0; i < nums.length; i++) {
        if (frequency[nums[i]]) {
            frequency[nums[i]]++
        } else {
            frequency[nums[i]] = 1
        }
    }

    for (const num in frequency) {
        if( frequency[num] === 3 ) {
            console.log(num)
        }
    }
}

containsDuplicate([1,2,3,4,4,5,6,4])



 











