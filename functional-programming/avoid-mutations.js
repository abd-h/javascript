/*          Avoid Mutations and Side Effects Using functional Programming

If you haven't already figured it out, the issue in the previous challeng was with the splice call 
in the tabCose() function. Unfortunately, splice chages the original array it is called on, so the second call 
to it used a modified array, and gave unexpected results.

This is a small  example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

On of the core pronciples of functional programming is to not change anything, including the function argumrnts or any global variable.

The prvious example didn't have any complicated ooperations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side 
effects.

Let's try to master this discipline and not alter any varible or object in our code.

Fill in the code for the function incrementer so ot returns the value of the global variable fixedValue 
increased by one.

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}*/

// the global variable
let fixedValue = 4;

function incrementer() {
    let fValue = fixedValue;
    fValue++;
    return fixedValue;
}
console.log(incrementer()); /* returns 5
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Pass arguments to Avoid External Dependence in a Function

The last challenge was  a step closer to functional programming principles, but there is still something missing.

we didn't alter the global variable value, but the funciton incrementer would not work without the global
variable fixedValue being there.

Another priniple of functional programming is to always declare your dependencies ecplicitly. This means if a 
function depends on a variable or object being present, then pass that variable or object directly into the fuctionas an argument.

There are several good consequences from this principle. the funciton is easier to test, you know exactly what 
input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part 
of  the code executes it.

Let's update the incrementer funcion to clearly declare its dependencies.

Write the increnter function so it takes an argument, and then returns a result after increasing the value by one.

// The global variable
let fixedValue2 = 4;

// Only change code below this line
function incrementer2() {


  // Only change code above this line
}
*/

// The global variable
let fixedValue2 = 4;

function incrementer2(value) {
    value++;
    return value;
}
console.log(incrementer2(fixedValue)); /* returns 5
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:
 
        1.  Don't alter avariable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existingvariable and not a copy. So changing  avalue in newArr would change 
        the value in arrVar.

        2.  Declare function parameters - any computationinside a function depends only on the argunmrnts 
        passed to the function, and not on any global object or variable.

        3.  Adding one to a numberis nor very exciting, but we can apply these principles when working with arrays or more complex objects.


Rewrite the code so the global array bookList is not changed inside function. The add function should
add the given bookNmae from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName 
parameter.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add(bookList, bookName) {
    let newBookList = bookList.slice();
    newBookList.push(bookName);
    return newBookList;
}

function remove(bookList, bookName) {
    const book_index1 = bookList.indexOf(bookName);
    console.log(book_index1);
    if(book_index1 >= 0) {
     bookList.splice(book_index1, 1);
        return bookList;
    }

}
console.log(add(bookList, "A Brief History of Time")); // returns ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

console.log(remove(bookList, "On The Electrodynamics of Moving Bodies")); // returns ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].

console.log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));
// returns ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].