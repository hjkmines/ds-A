const isValid = (s) => {
    // edge cases: 
  	if (!s || s.length === 1) return false;
   
   let frequency = {}
   
   for(let parenthesis of s){
     if (!frequency.hasOwnProperty(parenthesis)) {
        frequency[parenthesis] = 1; 
     } else {
        frequency[parenthesis]++; 
     }
   }
   
   if (frequency['('] !== frequency[')']) return false
   if (frequency['{'] !== frequency['}']) return false
   if (frequency['['] !== frequency[']']) return false

   return true; 
 };


console.log(isValid('(('))