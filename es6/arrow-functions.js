/*
                    Use Arrow Functions to Write Concise Anonymous Functions

    In JavaScript, we often don't need to name our function,  especially when passing a functions
    as an argument to another function. Instead, ew create inline functions. we don't need to name these functions because we do not reuse them anywere else.

     To achieve this, we  often use the following syntax: */

     const myFunc = function() {
         const myVar = "value";
         return myVar;
     }
     
    /* ES6 provides us with the syntactic suger to not have to write anonymous functions this way.
    Instead, you can use arrow function syntax: */

    const myFunc2 = () => {
        const myVar = value;
        return myVar;
    }

/* When there is no function body, and only a return value, arrow function syntax allows you to omit
the keyword return as well as the brackets surrounding the code. This helps simply smaller functions into one-line statements: */

const myArrowFunc = () => "value";
console.log(myArrowFunc()); /* returns value

Rewrite the function assigned to the variable mafic which returns a new Date() to use arrow function
syntax. Also, make sure nothing is defined using the keeword var.*/

let magic = () => new Date;
console.log(magic()); /* returns Wed Feb 09 2022 13:39:40 GMT+0000 (Greenwich Mean Time) 

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Write Arrow Functions with Parameters

Just liike a regular function, you can pass argumrnts into an arrow function.*/

const doubler = (item) => item * 2;
// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4,2)); /* returns 8

Rewrite the myconcat function which appends contents of arr2 to arrr1 so that the function uses arrow
function syntax.  

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5])); */

let myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); /* returns [1, 2, 3, 4, 5].
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Set Default Parameters for Your Functions

In order to help us create more flexible functions, ES6 introduces default parameters for functions. 

Check out this code:*/

const greeting = (name = "Anonymous") => {
    
    return  "Hello " + name;
}
console.log(greeting()); // Hello Anonymous
console.log(greeting("John")); /* Hello John

The default parameter kicks in when the argument is not specified (it is undefined). 
As you can see in the example above, the parameter name will receive its default  value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you 
want.

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified. 

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line*/

const increment = (number, value = 1) => number + value;
console.log(increment(6)); // returns 7
console.log(increment(6, 6)); // returns 12

// Without the default parameter
const incrementWithout = ((number, value) => value === undefined? number + 1 : number + value);
console.log(incrementWithout(10)); // returns  11
console.log(incrementWithout(10, 20)); // returns 30

