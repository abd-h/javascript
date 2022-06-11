/*
    Arguments Optional
    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. 

    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a functon.
    
    Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.

    if either argument isn't valid number, return undefined.
*/

    function addTogether(a) {
        if(arguments.length > 1 
            && typeof(arguments[0]) === typeof(1) 
            && typeof(arguments[1]) === typeof(1)) {
            return arguments[0] + arguments[1]
        } else if(arguments.length === 1 
            && typeof(arguments[0]) === typeof(1)) {
            return function(x) {
               if(typeof(x) === typeof(1)) {
                   return a + x;
               }
            }
        } else {
            return undefined
        }
    }
    console.log(addTogether(2, 3))//  return 5.

    console.log(addTogether(23, 30))//  return 53.

    console.log(addTogether(5)(7)); //  return 12.

    console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));//  return undefined.

    console.log(addTogether(2, "3"))//  return undefined.

    console.log(addTogether(2)([3])); // return undefined.

    console.log(addTogether("2", 3))//  return undefined.
    

    function isnot(a, b) {
        return typeof(a)  === typeof(1) && typeof(b) === typeof(1);
    }
    console.log(isnot('1', 2));