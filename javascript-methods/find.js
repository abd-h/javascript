/* Array.prototype.find()

The find() method returns the first elemnt in the provided array that satisfuies the provided
testing function. If no values satisfy the testing function, undefined is returned. */

const array1 = [5,12, 8, 130, 44];
const found = array1.find(element => element > 10) ; 
console.log(found);// returns 12

/* If you need the index of the found element in the array, use findIndex().
If you need to find the index of  a value, use Array.prototype.index(). (It's 
similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)

If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks 
each element for equality with the value instead of using a testing function. If you need to find if any elemnet satisfies the provided testing function, use Array.prototype.some().

Syntax
Arrow function 
find((element) => {...})
find((element, index) => {...})
find((element, index, array) => {...})

 callback function
 find(callbackFn)
 find(callbackFn, thisArg)

 Inline callback function
 find(function(element) { ... })
 find(function(element,index) { ... })
 find(function(element,index, array) { ... })
 find(function(element, index, array) { ... }, thisArg)

Parameters
callbackFn
Function to execute on each value in the array, taking 3 argument:

element 
The current element in the array.

index Optional
The index (position) of the current element in the array.

array Optional
The array the find was called on.

thisArg Optional
Object to use as this inside callbackFn.

Return value 
The first element in the array that satisfies the provided testing funciton. Otherwise, undefined
is return.

Description

The find method executes the callbackFn  function one for each index of the array until the callbackFn returns a truthy value. If so, find immediately returns the value of that elelment. 
Otherwise, find returns undefined.

callbackFn invoked for every index of the array, not just those assigned values. This means it may be less effecient for sparse arrays, compared to methods that only visit assigned values.

If a thisArg parameter is provided to find, it will be used as the this value inside each invocation
of the callbackFn. If it is not provided, then undefined is used.

The find method does not mutate the array on which it is called, but the function provided to 
callbackFn can. If so, the elements processed by find are set before the first invocation of 
callbackFn. Therefore:

callbackFn will not visit any element added to the array after the call to find begins.
Elements which assigned to indexes already visited, or to indexes outside the range, will not 
be visited by callbackFn.

If an existing, yet-unvisited element of the array is chaged by callbackFn, its value passed to the callbackFn will the value at the time find visits that element's index. 

Elements that are deleted are still visited.
Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (exept in special cases).
 
Examples
Find an object in an array by one of its properties*/

const inventory = [
    {name: "apples", quantity: 2},
    {name: "bananas", quantity: 0},
    {name: "cherries", quantity: 5}
];
function isCherries(fruit) {
    return fruit.name == "cherries";
}
console.log(inventory.find(isCherries)); // {name: 'cherries', quantity: 5}

// Using arrow function and destructuring

const result = inventory.find(({name}) => name === "cherries");
console.log(result); // {name: 'cherries', quantity: 5}

// Find a prime number in an array
// The following example finds an element in the array that is a prime number (or returns undefined 
// if there is no prime number):

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if(element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}
console.log([4,6,8, 12].find(isPrime)); // undefined
console.log([4,5,8, 12].find(isPrime)); // 5

/* The following examples show that nonexistent and deleted elements are visited, and that the 
 value passed to the callback is their value when visited

Declare array with no elements at indexes 2, 3, and 4 */
const array = [0,1,,,,5, 6];

// Shows all indexes, not just those with assigned values 
array.find(function(value, index) {
    console.log('visited', index, 'with value', value);
})

// Shown all indexes including deleted
array.find(function(value, index) {
    // Delete element 5 on first iteration
    if(index === 0) {
        console.log("Deleting array[5] with value", array[5]);
        delete array[5];
    }
    // Element 5 is still visited even though deleted
    console.log("visited index", index, "with value", value);
})



