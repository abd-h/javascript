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

/*  Parsing an array returned from a function

It's always been possible to return an array from a function. Destructuring can make working 
with an array return value more concise.

In this example, f() returns the values [1, 2] as its output, which can be parsed in single line with destructuring. */

function f() {
    return [1, 2];
}

let a, b; 
[a, b] = f();
console.log(a); // returns 1
console.log(b); // returns 2

// You can ignore some return values

function f2() {
    return [1, 2, 3];
}
const [c, , d] = f2();
console.log(c); // return 1
console.log(d); // return 3

const [e] = f2();
console.log(e);// returns 


