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
for loop that uses i variable. This is because the stored function will always refer to the value of 
the updated global i variable. */

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
and the printNumTwo() returns the global i and not the value i had when the function was created in the 
for loop. The let keyword does not follow this behavior: . */

let printNumberTwo; 
for (let j = 0; j < 3; j++) {
    if (j === 2) {
        printNumberTwo = function() {
            return j;
        }
    }
}
console.log(printNumberTwo());
 // console.log(j);
/* Here the console will display the value 2, and an error that j is not defined.

j is not defined because it was not declared in the global scope. It is only declared within the for 
loop statement. printNumberTwo() retruned the correct value because three different j variables 
with unique values (0, 1, 2) were created by the let keyword within the loop statement.

Fix the code so that j declared in the if statement is a separate variable than j declared in the 
first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assighn scope
to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable name to a void confusion.

function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
 */

function checkScope() {
    let j = "Function Scope";
    console.log("Function Scope j is :", j);
    if(true) {
        let i = "Block Scope";
        console.log("Block Scope i is:", i);
    }
    return j;
}
console.log(checkScope());

/*
            Mutate an Array Declared with const

If you are unfamilar with const, check out this challange.

The const declaration has many use cases in modern JavaScript. 

Some developers prefer to assign all their wariables using const by default, unless they know they will
need to reassign the value. Only in that case, they use let.

However, it is imortant to understand that objects (including arrays and functions) assigned to a
 variable using const are still mutable. Using the const declaration only prevents reassignment
of the variable identifier. */

const s = [5, 6, 7];
// s = [1, 2, 3];
s[2] = 45;
console.log(s);
// s = [1, 2, 3]; // will result error. The console.log will display the value [5, 6, 45].

/* AS you can see, you can mutate the object [5, 6, 7] it self and the variable s will still point 
to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but cont was 
used, you cannot use the variable identifier s to point to a different array ysing the assignment 
operator.

An array is declared as const s2 = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments. 

const s2 = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();*/

const s2 = [5, 7, 2];

function editInPlace() {
    s2.pop();
    s2.unshift(2);
    return s2;
}
console.log(editInPlace());


