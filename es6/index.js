/*
            Compare Scopes of the var and let Keywords
If you are unfamiliar with let, check out this challenge. 

When you declare a variable with the var keyword, it is declared globally, 
or locally if declared inside a function.

The let keyword behaves similaly, but with some extra features. When you declare 
a variable with the let  keyword inside a block, statement, or expression, its scope is 
limited to that block, statement, or expression. 

for example:  */

var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
/* Here the console will display the values [0, 1, 2] and 3.

With the var keyword, i is declared globally. So when i++ is excecuted, it updates the global variable.
This code is similar to the following:*/

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
/* Here the console will display the values [0, 1, 2] and 3.

this behavior will cause problems if you were to create a function and store ir for later use inside a 
for loop that uses i variable. This is because the stored function will always refer to the value of the updated global i variable. */

var printNumTwo;
for(var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        }
    }
}
console.log(printNumTwo()); /* Here the console will display the value 3.

As you can see, prinNumTwo() prints 3 and not 2. This is because the value assigned to i was updated
and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior: . */

let printNumberTwo; 
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumberTwo = function() {
            return i;
        }
    }
}
console.log(printNumberTwo());
console.log(i);