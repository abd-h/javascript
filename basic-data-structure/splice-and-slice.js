/*    Remove Items Using splice()
    
    Ok, so we've learned how to remove elements from the beginning and end of array using shift()   
    and pop(), but what if we want to remove an element from somewhere in the middle? Or remove 
    mere than one element ar once? Well, that's where splice() comes in. splice() allow us to do 
    just that: remove any number of consecutive elements from anywhere in an array
    

    splice() can take up to parameters, but for now, we'll focus on just the first 2. The first  two parameter of splice() are intergers which represent indexes, or position, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicate the number of elements to delete. For example:    */
    
    let array = ["today", "was", "not", "so", "great"];
    array.splice(2,2);
    console.log(array); //  ['today', 'was', 'great']

    // splice() not only modifies the array it's being called on, but it also returns a niew array containing the value of the removed element:

    let array1 = ["I", "am", "feeling", "really", "happy"];
   
    let newArray = array1.splice(3,2);
    console.log(newArray);// ["really", "happy"]

/*  We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elementsthat sum to the value of 10

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);  */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.shift();
arr.splice(0, arr.length, ...arr.slice(1, 4));
console.log(arr);

/****************************************************************************

    Add Items Using splice()
    Remember in the last challange we mentioned of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
 */
    const numbers = [10, 11, 12, 12, 15];
    const startIndex = 3;
    const amountToDelete = 1;

    numbers.splice(startIndex, amountToDelete, 13,  14);
    console.log(numbers); // returns [10, 11, 12, 13, 14, 15]

    /* Here, we begin with an array numbers. Then, wwe pass the following to splice(): The index at 
    which to begin deleting element (3), the number of elements to be deleted (1), and the remaining
    arguments (13, 14) will be inserted starting at the same index. Note that there can be any number 
    of elements (separated by commas) followiing amountToDelete, each of which gets inserted.  

    We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument.
    Modify the functon using splice() to remove the first two elements of the array and add 
    "DarkSalmon" and "BlachedAlmond" in their respective places.

function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));*/

    function htmlColorNames(arr) {
        let newArr = [...arr]
        newArr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
        return newArr;
    }
    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
    /* returns ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'] 
    
    Copy Array Items Using slice()
    The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters - the first is the index at which to begin extraction, and the second is the index at which to stopextraction (extraction will occur up to, but not including the element at this index). Consider this:    */

    let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

    let todaysWeather = weatherConditions.slice(1, 3);
    console.log(todaysWeather); // returns ['snow', 'sleet']

/* We have defined a funciton, forecast, that takes an arry as an argument. Modify the funciton
using slice() to extract information, from the argument array and return a new array that contains the string element warm and sunny.

function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));*/

function forecast(arr) {
    return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));