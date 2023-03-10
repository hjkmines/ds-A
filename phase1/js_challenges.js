function reverseString(str) {
    return str.split('').reverse().join('');
  }


// 'bob' --> 'bob'
// 'Maria' --> 'airam'
// 'deed' ---> 'deed'

const isPalindrome = (str) => {
    if(str.toLowerCase() === str.split('').reverse().join('').toLowerCase()){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

// isPalindrome('Bob');

// apples ---> 'even'
// maria ---> 'odd'
const oddOrEven = (str) => {
    if(str.length % 2 === 0) {
        console.log(`${str} is even`)
        return 'even'
    } else {
        console.log(`${str} is odd`)
        return 'odd'
    }
    
}

oddOrEven('Maria')