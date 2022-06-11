/*
    Steamroller
    Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
   return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b)? steamrollArray(b): b)
   }, []);  
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
