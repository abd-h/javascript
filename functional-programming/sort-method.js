/*              Sort an Array Alphabetically using the sort Method

The sort method sorts the elemnts of an array according to the callback function.

for example:*/

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

console.log(ascendingOrder([1, 5, 2, 3, 4])); // returns [1, 2, 3, 4, 5];

function reverseAlpha(arr) {
    return arr.sort((a, b) => {
        return    (a === b)? 0 
                    :(b > a)? 1
                    : -1;
    })
}
console.log(reverseAlpha(["l", "h", "z", "b", "s"])); /* returns ['z', 's', 'l', 'h', 'b'] 


JavaScript's default sorting method is by string Unicode point value. which may return unexpected results.
Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such 
a callback function, normally called compareFunction, is supplied, the array elements are sorted occurding 
to the return value of the compareFunction: If compareFunction(a, b) returns a value less than 0 for two
elements a nd b, then a will come before b. If compareFunction(a, b) returns a value equal to 0 for two elements a nd b, then a and b will remain unchanged.

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
The function should retrun the sorted array.

                function alphabeticalOrder(arr) {
                // Only change code below this line

                return arr
                // Only change code above this line
                }

                alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);*/

function alphabeticalOrder(arr) {
    return arr.sort((a, b) => {
        return (a === b)? 0
            :(a > b)? 1
            : -1;
        });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); // returns ["a", "a", "c", "d", "g", "z"].

console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])); // returns ["a", "h", "m", "m", "n", "x"].

console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])); // returns ["a", "a", "a", "a", "t", "x"].
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Return a Sorted Array Without Changing the Original Array

A side effect of the sort method is thaat it changes the order of the elements in the original array.
In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember taht slice and concat return a new array), then run the sort 
method.

Use the sort methodo inn the nonMuratingSort function to sort the elements of an array in ascending order. The function shouldl return a new array, and nor mutate the globalArray variable.

                const globalArray = [5, 6, 3, 2, 9];

                function nonMutatingSort(arr) {
                // Only change code below this line

                // Only change code above this line
                }

                nonMutatingSort(globalArray);    */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    return arr.slice().concat().sort((a, b) => a - b);
}

// Your code should use the sort method.

//The globalArray variable should not change.

console.log(nonMutatingSort(globalArray)); // should return [2, 3, 5, 6, 9].

console.log(nonMutatingSort(globalArray)); // should not be hard coded.

//The function should return a new array, not the array passed to it.

console.log(nonMutatingSort([1, 30, 4, 21, 100000])); // should return [1, 4, 21, 30, 100000].

console.log(nonMutatingSort([140000, 104, 99])); // should return [99, 104, 140000].

