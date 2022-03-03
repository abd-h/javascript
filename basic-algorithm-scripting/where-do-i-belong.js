/** Where do I Belong 
 * Return the lowest index at which a value (second argumned) should be inserted into 
 * an array (first argument) One it has been sorted. the returned value should be 
 *  a number.
 * 
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1). 
 * 
 * Likewise, genIndexToIns([20,3,5], 19) should return 1 because once the array has been sorted it 
 * will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

function getIndexToIns(arr, num) {
    let myArr = arr.slice();
    myArr.push(num);
    return myArr = myArr.sort((a, b) => a - b).indexOf(num)
}
console.log(getIndexToIns([40, 60], 50));

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //  return 3.

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //  return a number.

console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //  return 2.

console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //  return a number.

console.log(getIndexToIns([40, 60], 50)); //  return 1.

console.log(getIndexToIns([40, 60], 50)); //  return a number.

console.log(getIndexToIns([3, 10, 5], 3)); //  return 0.

console.log(getIndexToIns([3, 10, 5], 3)); //  return a number.

console.log(getIndexToIns([5, 3, 20, 3], 5)); //  return 2.

console.log(getIndexToIns([5, 3, 20, 3], 5)); //  return a number.

console.log(getIndexToIns([2, 20, 10], 19)); //  return 2.

console.log(getIndexToIns([2, 20, 10], 19)); //  return a number.

console.log(getIndexToIns([2, 5, 10], 15)); //  return 3.

console.log(getIndexToIns([2, 5, 10], 15)); //  return a number.

console.log(getIndexToIns([], 1)); //  return 0.

console.log(getIndexToIns([], 1)); //  return a number.