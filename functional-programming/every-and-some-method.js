/*                      Use the every Method to Check that Every Element in an Array Meets a Criteria

The every method works with arrays to check if every element passes a particular test. Ir returns 
a Boolean value - true if all values meet the criteria, false if not.

For Example, the following code would check if every element in the numbers array is less than
10:         */

const numbers = [1, 5, 8, 0, 10, 11];

let lessThanTen = numbers.every(function(currentValue) {
    return currentValue < 10;
});
console.log(lessThanTen); /* The every method would return false here.

Use the every method inside the checkPositive function to check if every element in arr is positive. 
The function should return a Boolean value.

function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);*/

function checkPositive(arr) {
    return arr.every(a => a > 0)
}
const mixNums = [1, 2, 3, -4, 5];

console.log(checkPositive(mixNums));

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Use the some Method to Check that any Elements in an array Meet a Criteria

The some method works with arrays to check if any element passes a particular test. It returns 
a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 20:*/

const newNums = [10, 50, 8, 220, 110, 11];
const lessThanTwenty = newNums.some(a => a < 20);
console.log(lessThanTwenty); // The some method returns true here

/* Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);*/

function checkPositiveOnSome(arr) {
    return arr.some(a => a > 0);
}
console.log(checkPositiveOnSome([1, 2, 3, -4, 5]));
console.log(checkPositiveOnSome([1, 2, 3, 4, 5]));
console.log(checkPositiveOnSome([-1, -2, -3, -4, -5]));
