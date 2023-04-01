// The Fibonacci Seq: 
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 .....

// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2)
// }

// memoized + recursion
const fib = (n, memo = [undefined, 1, 1]) => {
    // first check if the fib(n) we want already exists in our memo, if so, we found it and return it 
    if (memo[3]) return memo[n]

    const result = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = result
    return result;
}

// tabulation
const fib2 = (n) => {
    if (n <= 2) return 1; 
    let fibNums = [undefined, 1, 1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
}

fib(5)