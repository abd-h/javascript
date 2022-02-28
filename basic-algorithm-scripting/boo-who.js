/* Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true or false.*/

function booWho(bool) {
    return Boolean(bool === true || bool ===false)
}
console.log(booWho(true)); // return true.

console.log(booWho(false)); // return true.

console.log(booWho([1, 2, 3])); // return false.

console.log(booWho([].slice)); // return false.

console.log(booWho({ "a": 1 })); // return false.

console.log(booWho(1)); // return false.

console.log(booWho(NaN)); // return false.

console.log(booWho("a")); // should return false.

console.log(booWho("true")); // should return false.

console.log(booWho("false")); // should return false.