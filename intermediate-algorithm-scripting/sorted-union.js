/* Sorted Union
    Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
    
    In other words, all values present from all array should be included in their original order, but with no duplicates in the final array. 
    
    The unique numbers shuld be sorted by their original order, but the final array should not be sorted in numerical order.
    
    Check the assertion tests for examples.
    
    The Plan
    1. Create a function and use spread operater on the parameter
    2. Declare a variable called newArr and assign the first array
    3. Declare a variable called arr2 for the rest of arrays
    4. Declare a variable called newArr2 and assign it to first item of the first Array by using Destructuring Assignment
         // after selecting the first item of the first array, then place it inside array
    3.  Use reduce() method to search the rest of the arrays for duplicates against newArr2 by using if statement, if newArr2 includes(element) equals false push element to newArr which is place on the last argument.
     */

    function uniteUnique(...arr) {
        let [newArr] = arr,
             [...arr2] = arr.slice(1),
             [newArr2] = newArr;
       
        newArr2 = [newArr2]
      
        newArr.filter(a => {
            if(newArr2.includes(a) == false) {
                newArr2.push(a)
            }
        });
        return  arr2.reduce((acc, array) => {
            array.forEach(element => {
                if(newArr2.includes(element) == false) {
                    acc.push(element);
                }
            });
            return acc;
        }, newArr2);
    }
    
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // returns [1, 3, 2, 5, 4];
    console.log(uniteUnique([1, 2, 3], [5, 2, 1]));//  returns [1, 2, 3, 5].

    console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));//  returns [1, 2, 3, 5, 4, 6, 7, 8].
    console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));//  returns [1, 3, 2, 5, 4, 6].

    console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));//  returns [1, 3, 2, 5, 4].

