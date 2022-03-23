/*  Copy an Array with the Spread Operator
While slice() allows us to be selective about what elements of an array to copy, amoung several 
other useful tasks, ES6's new spread operator allows us to easily  copy all of an array's elements, 
in order, with a simple and highly readible syntax. The spread syntax simple looks like this: ...

In practice, we can use the spread operator to copy an array like so:  */

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray); /* returns [true, true, undefined, false, null]

We have defined a function, copyMachine which takes arr (an array) and num (number) as argument. 
The function is supposed to return a new array made of num copies of arr. We have done most of the work for you, but it does't work quite right yet. Modify the function using spread syntax so that it works correctly (hit: another method we have already covered might come in handy here!).

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
*/

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr])
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));
/* returns  [[true, false, true], [true, false, true]] 
*******************************************************************

    Combine Array with the Spread Operator
    Anoter huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:    */

    let thisArr = ["sage", "rosemary", "parsley", "thyme"];

    let thatArr = ["sage", "cilantro", ...thisArr, "thyme"];
    console.log(thatArr);
    /* returns ['sage', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'thyme'] 
    
    Using spread sytax, we have just achieved an operation that would have been more 
    complex and more verbose had we use traditional methods. 
    
    ********************************************************************
    
    Check For The Presence of an Element With indexOf()
    Since arrays canbe changed, or mutated, at any time, there's no guarentee about where a particular piec of data will be on a given array, or if that element even still exist. Luckely, 
    JavaScript provides us with another built-in methode, indexOf(), that allow us to quickly and easily check for the presence of an element on an array. IndexOf() takes an elemnent as a parameter, and when called, it returns the position, or index, of that element, or -1 if the elementdoes not on the array. 

    For example:    */

    let fruits = ["Apples", "Pears", "Oranges", "Peaches", "Pears"];

    console.log(fruits.indexOf("dates")); // returns -1
    console.log(fruits.indexOf("Oranges")); // returns 2
    console.log(fruits.indexOf("Pears")); // returns 1
   
    /* indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a funciton, quickCheck, that takes an array and an element as arguments.
    
    Modify the function using indexOf() so that it returns true if the passed element exist on the array, and false if it does not.
    
    function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); */

function quickCheck(arr, elem) {
    if (arr.indexOf(elem) !== -1) {
        return true;
    } else {
        return false;
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));