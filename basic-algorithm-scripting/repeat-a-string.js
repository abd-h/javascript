/* Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this 
challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
        if(num === 0) {
            return ""
        } else {
            repeated +=  str;
        }
   
}
return repeated
}
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3)); //  return the string ***.

console.log(repeatStringNumTimes("abc", 3)); //  return the string abcabcabc.

console.log(repeatStringNumTimes("abc", 4)); //  return the string abcabcabcabc.

console.log(repeatStringNumTimes("abc", 1)); //  return the string abc.

console.log(repeatStringNumTimes("*", 8)); //  return the string ********.

console.log(repeatStringNumTimes("abc", -2)); // return an empty string ("").

// The built-in repeat() method should not be used.

console.log(repeatStringNumTimes("abc", 0)); //  return "".













function repeatStringNumOfTimes(str, num) {
    return [num].reduce((a, b) => {
        
       if (b < 0) {
           return ""
       } else {
          for(let i = 0; i < b; b--) {
              a += str;
          }
       }
       return a
    }, "");
}

console.log(repeatStringNumOfTimes("abc", 3));