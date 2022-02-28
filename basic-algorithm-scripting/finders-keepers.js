/*  Finders Keepers
Create a function that looks throughh an array arr and returns the first element
in it that passes a 'truth test'. This means that given an element x, the 'thuth test' is passed if func(x) is true. If no element passes the test, returns */

function findElement(arr, func) {
    return arr.find(a => func(a));
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // return 8.

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })) // return undefined.