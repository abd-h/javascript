/* Title Case a Sentence 

Return the provided string with the first letter of each word  capitalize. 
Make sure the rest of the word is in lower case.*/

function titleCase(str) {
    return str  
            .toLowerCase()
            .split(" ")
            .map(a => a[0][0]
                    .toUpperCase()
                    .concat(a.slice(1)))
            .join(" ")
}
// console.log(titleCase("I'm a little tea pot"));

console.log(titleCase("I'm a little tea pot")); //  return a string.

console.log(titleCase("I'm a little tea pot")); //  return the string I'm A Little Tea Pot.

console.log(titleCase("sHoRt AnD sToUt")); //  return the string Short And Stout.

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); //  return the string Here Is My Handle Here Is My Spout.
