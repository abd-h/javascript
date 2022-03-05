/* Chunky Monkey
Write a function that splits an array (first argument) into groups the length of the size 
(second argument) and returns them as a two-dimensional array.
*/
function isPrime(num) {
    return num % 2 === 0;
}
console.log(isPrime(4));

function isOdd(num) {
    return num % 2 !== 0;
}
console.log("It's odd number: ", isOdd(5));
function chunkArrayInGroups(arr, size) {
  let b = [];
    
        for(let i = 0; i < arr.length; i += size) {
              b.push(arr.slice(i, i + size));
    }
    return b
} 
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //  return [["a", "b"], ["c", "d"]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //  return [[0, 1, 2], [3, 4, 5]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //  return [[0, 1], [2, 3], [4, 5]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //  return [[0, 1, 2, 3], [4, 5]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //  return [[0, 1, 2], [3, 4, 5], [6]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //  return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //  return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].