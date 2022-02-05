/*              Introduction to Currying and Partial Applicaiton

The arity of a function is the number of  arguments it requires. Currying a function means to converts a function of n arity into N function of arity 1.

In other words, it restructures a function so it takes one argumrnt, then returns another function that takes the next argument, and so on.

Here's an example:*/

// Uncurried function
function unCurried(x, y) {
    return x + y;
}
console.log("Uncurried function: ", unCurried(20, 10)); // returns 30

// Curried function
function curried(x) {
    return function(y) {
        return x + y;
    }
}

// Curried on arrow function
const curriedFuc = (x => y => x + y);

console.log("Curried Function: ", curried(10)(2));
console.log(curriedFuc(30)(30)); /* returns 60 

This is useful in you program if you can't supply all the argument to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argumrnt when it's available. Here's an example using the curreid function in the example above:*/

const funcForY = curried(1);
console.log(funcForY(20)); /* returns 21 

Similaarly, partial application can be described as applying a few arguments to afunction at a time and 
returning another function that is applied to more arguments. Here's an example: */


function impartial(x, y, z) {
    return x + y + z ;
}

const partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(200));// returns 203

/*
Fill in the body of the add function so it uses currying to add parameters x, y and z.

 function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30); */

function add(x) {
    return (y) => (z) => x + y + z;
}
console.log(add(10)(20)(30));