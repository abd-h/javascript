/*  Sum All Numbers in a Range 
    We'll pass you an array of two numbers. Return the sum of those two numbers plus 
    the sum of the numbers netween them. The lowest number will not always come first.
    
    For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
    
    function sumAll(arr) {
        return 1;
    }

    sumAll([1, 4]); */

    function sumAll(arr) {
        let newArr = arr.slice()
                                  .concat()
                                  .sort((a, b) => a - b);
       return [newArr[1]].reduce((a, b) => {
           for(let i = newArr[0]; i < b; i++) {
               a += i;
           }
           a += b;
           return a;
       }, 0)                    
    }
    console.log(sumAll([4, 1]));

    console.log(sumAll([1, 4])); //  return 10.

    console.log(sumAll([4, 1])); //   returns 10.

    console.log(sumAll([5, 10])); //   returns 45.

    console.log(sumAll([10, 5])); //  returns 45.
