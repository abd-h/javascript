/*      Arrray.protptype.splice()

The splice() method chages the contents of an array by removing or replacing 
existing aelements and/or adding new elements in place. 

Array.splice() */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

/*  Syntax

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

    Parameters
    start
The index at which to start changing the array.

If greater than the length of the array, start will be set to the length of the array.
in this case, no element will be deleted but the method will behave as an adding function,
adding as many elements as items provided.

If negetive, it will begin that many elements from the end of the array. (in this case, the origin -1 meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.). If start is negative infinity, it will begin from index 0.

If deleteCount is ommited, or if its value is equal to or larger than array.length - start (that is,
if it is equal to or greater than the number of elements left in the array, starting at start), then
all the elements from start to theend of the array will be deleted. However, it must not be ommited if there is any item1 parameter.

If deleteCount is 0 or negetive, no elements are removed. In this case, you should specify at least
one new element (see below).

item1, item2, ....Optional
The elements to add to the array, beginning from start.

If you do not specityh any elements, splice() will only remove elements from the array.

    Return Value
An array containing the deleted elements.

If only one element is removed, anarray of one element is returned.

If no elements are removed, an empty array is returned.

    Description 
If  the specified number of elements to insert differs from the number of elements being removed,
the array's length will be changed.

    Examples
Remove 0 (zero) elements before index 2, and insert "drum".   */

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2, 0, 'drum');
console.log(myFish); 
console.log(removed);/*
myFish is ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
removed is [], no elements is removed. 

Remove 0 (zero) elements before index 2, and insert 'drum' and 'guitar' */
let newFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let remove = newFish.splice(2, 0, 'drum', 'guitar');
console.log(newFish); //  ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']
console.log(remove); // no elements removed.

// Remove 1 element at index 3
let originFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
let removeOrigin = originFish.splice(3, 1);
console.log(removeOrigin); // marandin

// Remove 1 element at index 2, and insert 'trumpert'
let trumpert = ['angel', 'clown', 'drum', 'sturgeon'];
let removeTrumpert = trumpert.splice(2, 1, 'trumpert');
console.log(trumpert); // ['angel', 'clown', 'trumpert', 'sturgeon'] 
console.log(removeTrumpert);  // drum

// Remove two elements from index 0, and insert "parat", "anemone" and "blue"
let listOfFishes = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removeF = listOfFishes.splice(0, 2, 'parat', 'anemone', 'blue');
console.log(removeF); // returns ['angel', 'clown']
console.log(listOfFishes); // ['angel', 'clown', 'trumpert', 'sturgeon']

// Remove 2 elements, starting from the index 2
let myfish2 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
let removed2 = myfish2.splice(2,2);
console.log(removed2); // ['blue', 'trumper'];
console.log(myfish2); //  ['parrot', 'anemone', 'sturgeon']

// Remove 1 element from index -2;
let myFish2 = ['angel', 'crown', 'mandarin', 'sturgeon'];
let removeFromBack = myFish2.splice(-2, 1);
console.log(removeFromBack); ['mandarin'];

// remove all elements, starting from index 2;
let myFish3 = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed3 = myFish3.splice(2);
console.log(removed3);
console.log(myFish3);['angel', 'clown'];


function chunkArrayInGroups(arr, size) {
    return arr.reduce((a, b, c, d) => {
        a.push(d.splice(c, size, c))
        return a;
    }, []);
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].




