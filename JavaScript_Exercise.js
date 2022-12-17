// To create a function that returns a string in reverse in JavaScript, you can use the following code:

function reverseString(str) {
    return str.split('').reverse().join('');
  }

  
// To create a function that returns true if a string is a palindrome and false if it is not in JavaScript, you can use the following code:

// Here's how the function works:

// The toLowerCase() method is used to convert the string to lowercase, so that the function is not case-sensitive.
// The split(), reverse(), and join() methods are used to reverse the string.
// The function compares the original string to the reversed string. If they are the same, the function returns true, indicating that the string is a palindrome. If they are different, the function returns false, indicating that the string is not a palindrome.

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
  }

// create a function that returns a integer in reverse javascript
function reverseInt(int) {
    return parseInt(int.toString().split('').reverse().join(''));
  }

// Return a string with the first letter of every word capitalized
function capitalizeWords(string) {
    const words = string.split(' ');  // Split the string into an array of words
    const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));  // Capitalize the first letter of each word
    return capitalizedWords.join(' ');  // Join the words back into a string
  }

// Return the character that is most common in a string

function mostCommonChar(string) {
    const charCount = {};  // Create an empty object to store the character count
  
    // Loop through the string and count the number of occurrences of each character
    for (const char of string) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Find the character with the highest count
    let mostCommonChar = '';
    let maxCount = 0;
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        mostCommonChar = char;
        maxCount = charCount[char];
      }
    }
  
    return mostCommonChar;
  }

// Return the longest word of a string
function longestWord(string) {
    const words = string.split(' ');  // Split the string into an array of words
    let longestWord = '';  // Initialize a variable to store the longest word
  
    // Find the longest word
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
// Split an array into chunked arrays of a specific length
function chunkArray(array, chunkSize) {
    const chunkedArray = [];  // Create an empty array to store the chunked arrays
  
    // Loop through the array and split it into chunks of the specified size
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
  
    return chunkedArray;
  }
  
// Take an array of arrays and flatten to a single array
function flattenArray(arrayOfArrays) {
    return arrayOfArrays.reduce((flatArray, currentArray) => flatArray.concat(currentArray), []);
}

function flattenArray(arrayOfArrays) {
return [].concat(...arrayOfArrays);
}
    
// Return true if anagram and false if not

function isAnagram(string1, string2) {
    const sortedString1 = string1.split('').sort().join('');  // Sort the characters in string1
    const sortedString2 = string2.split('').sort().join('');  // Sort the characters in string2
  
    return sortedString1 === sortedString2;  // Compare the sorted strings
  }
  

// Change every letter of the string to the one that follows it and capitalize the vowels 
// Z should turn to A
function letterChanges(string) {
    const vowels = 'aeiou';  // Define the vowels
    let modifiedString = '';  // Create a variable to store the modified string
  
    // Loop through the string and modify each character
    for (const char of string) {
      let modifiedChar = char;  // Initialize a variable to store the modified character
  
      // Check if the character is a letter
      if (char.match(/[a-z]/i)) {
        // Shift the character to the next one in the alphabet
        modifiedChar = String.fromCharCode(char.charCodeAt(0) + 1);
  
        // Check if the modified character is a vowel
        if (vowels.includes(modifiedChar)) {
          // Capitalize the modified character
          modifiedChar = modifiedChar.toUpperCase();
        }
      }
  
      // Add the modified character to the modified string
      modifiedString += modifiedChar;
    }
  
    return modifiedString;
  }
  
// Return a sum of all parameters entered regardless of the amount of numbers 
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole 
// number greater than 1 whose only factors are 1 and itself
function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }
  
  function sumPrimes(n) {
    let total = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) total += i;
    }
    return total;
  }
  

// Remove from the array whatever is in the following arguments. Return the leftover numbers in an 
//array
function destroyer(arr) {
    // Create an array of the arguments passed to the function
    const args = Array.from(arguments).slice(1);
  
    // Use the filter method to create a new array containing only the elements
    // that are not in the arguments passed to the function
    const result = arr.filter(x => !args.includes(x));
  
    return result;
  }
  

// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the 
// trees.
function sortByHeight(a) {
    // Create a new array containing only the heights of the people
    const people = a.filter(x => x !== -1);
  
    // Sort the people array in ascending order
    people.sort((a, b) => a - b);
  
    // Use the map method to create a new array with the heights of the people replaced
    // by the sorted heights from the people array
    const result = a.map(x => (x === -1 ? -1 : people.shift()));
  
    return result;
  }
  

// Find the missing letter in the passed letter range and return it. If all letters are present, 
// return undefined

function fearNotLetter(str) {
    // Get the ASCII value of the first character of the string
    let prev = str.charCodeAt(0);
  
    // Iterate over the characters in the string, starting at the second character
    for (let i = 1; i < str.length; i++) {
      // Get the ASCII value of the current character
      let current = str.charCodeAt(i);
  
      // If the difference between the ASCII values is greater than 1, then a letter is missing
      if (current - prev > 1) {
        // Return the missing letter by using the String.fromCharCode method and passing in the ASCII value
        // of the previous character plus 1
        return String.fromCharCode(prev + 1);
      }
  
      // Update the value of prev to the current ASCII value
      prev = current;
    }
  
    // If the loop completes without finding a missing letter, return undefined
    return undefined;
  }  

// Take in an array and return an array of the sums of even and odd numbers
function sumEvenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;
  
    arr.forEach(x => {
      if (x % 2 === 0) {
        evenSum += x;
      } else {
        oddSum += x;
      }
    });
  
    return [evenSum, oddSum];
  }
  
/* There is a malfunctioning keyboard where some letter keys do not work.  
All other keys on the keyboard work properly. 
 
Given a string text of words separated by a single space (no leading or trailing spaces)  
and a string brokenLetters  
of all distinct letter keys that are broken, return the number of  
words in text you can fully type using this keyboard
*/

function brokenKeyboard(text, brokenLetters) {
    // Split the text into an array of words
    const words = text.split(" ");
  
    // Use the filter method to create a new array containing only the words that can be fully typed
    // using the keyboard
    const fullyTypedWords = words.filter(word => {
      return word.split("").every(char => !brokenLetters.includes(char));
    });
  
    // Return the length of the filtered array
    return fullyTypedWords.length;
  }
  