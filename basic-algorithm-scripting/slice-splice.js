/* Slice and Splice

You are given two array and an index.

Copy each element of the first array into the second array, in order.
Begin inserting element at index n of the second array

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    let array = arr2.slice();
    array.splice(0, n,...array.slice(0,n),...arr1)
    return array

}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); //  return [4, 1, 2, 3, 5].

console.log(frankenSplice([1, 2], ["a", "b"], 1)); //  return ["a", 1, 2, "b"].

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); //  return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

//All elements from the first array should be added to the second array in their original order. 
console.log(frankenSplice([1, 2, 3, 4], [], 0)); //  return [1, 2, 3, 4].

//The first array should remain the same after the function runs.

//The second array should remain the same after the function runs.