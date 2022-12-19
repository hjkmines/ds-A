// a string S made of uppercase English letters is given. in one move, 
// six letters forming the word "BANANA" (one 'B', three A's, and two 'N's)
// can be deleted from S. What is the maximum number times such a move can be applied
// to S? 


//write a function: function solution(S);
//that given a string S of length N, returns the maximum number of
//moves that can be applied

//examples:
//given S = "NAABXXAN", the function should return 1.
//NAABXXAN=> XX

// sudo-steps 

const solution = (string) => {
    // step 1: to solve this problem, we can first count the number of occurences of each letter in the 
    // string 's'. We can use a object to store the counts of each letter
    let count = {}; 

    for (let letter of string) {
        count[letter] = (count[letter] || 0) + 1
    }

    // step 2: then, we can use the counts to calculate the maximum number of times
    // we can apply the "BANANA" operation. We can do this by dividing the number of "A's"
    // and "N's" by the corresponding numbers in the "BANANA" string and take the minimum of these values. 
    // Finally, just divide the result by 2! because each "BANANA" operation SPECFICALLY 
    // requires TWO 'N's

    let maxCount = Math.min(count['A']/3, count['N']/2)
    maxCount = Math.ceil(maxCount/2)

    return maxCount;
}

console.log(solution('NAABXXAN'))