/*
    The Fibonacci numbers are the following: 1, 1, 2, 3, 5, 8, 13, 21.... 
    In math terms, the sequence is calculated by the previous 2 numbers
*/

// Recursive Solution
const fib = (n) => {
    // base case
    if (n <=2 ) return 1; 
    return fib(n - 1) + fib(n - 2)
}

// memoized + recursive
const fibMemoized = (n, memo = []) => {
    if (memo[n]) return memo[n]
    if (n <= 2) return 1; 
    let res = fib(n-1, memo) + fib(n-2, memo)
    //store now in your memo array;
    memo[n] = res; 
    return res
}

// memoized + recursive
const fibOptimalMemoized = (n, memo = [0, 1, 1]) => {
    if (memo[n]) return memo[n]
    let res = fib(n-1, memo) + fib(n-2, memo)
    //store now in your memo array;
    memo[n] = res; 
    return res
}

// tabulated method 
fibTabulation(5)

const fibTabulation = (n) => {
    if (n <= 2) return 1
    let fibCollection = [0, 1, 1]; 
    for (let i = 3; i <= n; i++) {
        fibCollection.push(fibCollection[i - 1] + fibCollection[i-2])
        // fibCollection[i] = fibCollection[i - 1] + fibCollection[i-2]
    }

    return fibCollection[n]
}