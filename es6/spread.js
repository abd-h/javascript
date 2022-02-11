/*          Use the Spread Operator to Evaluate Arrays In-Plays

ES6 introduce the spread operator, whci allows us to expand arrays and other expressions in places
where multiple parameters aor elements are expected.

The ES5 code below uses apply() to conpute the maximum value in an array: */

var arr = [6,89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus); /* 89.

We had to use Math.max.apply() because Math.max(arr) returns NAN. 
Math.max() expects  comma-seperated arguments,  but not an array. 

The spread operator makes this syntax much better to read and maintain.*/

const arr2 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr);
console.log(maximus2); // returns 8


/* ...arr returns an unpacked array. In other words, it spreads the array. However,
the spread operator only works in-place, like in an argument to a function or in an 
array literal.  The following code will not work.  

const spreaded = ...arr;

Copy all contents of arr1 into arr2 using the spread operator. 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);*/

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr3;
arr3 = [...arr1];
console.log(arr3);



