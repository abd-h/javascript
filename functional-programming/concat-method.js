/*          Conbine Two Arrays Using the concat Method 

Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:*/

let nums = [1, 2, 3].concat([4, 5, 6]);
console.log(nums); /* returns [1, 2, 3, 4, 5, 6] 

Use the concat method in the nonMutatingConcat function to concatinate attach to the end of the original.
The function should return the concatinated array.

Combine Two Arrays Using the concat Method
Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

[1, 2, 3].concat([4, 5, 6]);
The returned array would be [1, 2, 3, 4, 5, 6].

Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);*/

function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}

let first = [1, 2, 3];
let second = [4,5,6];

console.log(nonMutatingConcat(first, second));/* returns  [1, 2, 3, 4, 5, 6] 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Functional programming is all about creating and using non-mutating functions.

The last challeng introduced the concat method as a way to combine arrays into a new one without
mutating the original arrays. Compare concat to the push method. push adds an item to the end of the 
same array  it is called on, which mutates that array. Here's an example:*/

const arr = [1, 2, 3];
arr.push([4, 5, 6]); /*
arr would have a modified value of [1, 2,  3, [4, 5, 6]], which is not the functional programming way.

concat offers a way to add new items to the end of an array without any mutating side effects. 

Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of 
push. 
The function should return an array.

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);*/

function nonMutatingPush(original, newItem) {
    return original.concat(newItem)
}

let first1 = [1, 2, 3];
let second2 = [4, 5, 6];

console.log(nonMutatingPush(first, second2));
