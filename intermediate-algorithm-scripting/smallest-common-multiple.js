/* Smallest Common Multiple
    Find the smallest common multiple of the provided parameters that can be evenly divided by both,
    as well as by all sequential numbers in the range between these parameters.

    The range will be an array of two numbers that will not necessarily be in numerical order.

    For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. 
    */

    function smallestCommons(arr) {
        let lcm = arr.sort((a, b) => a - b);
        let [low, high] = lcm;
        let result = high;
        for(let i = low; i < high; i++) {
        
            if(result % i !== 0) {
                result += high;
                i = low - 1; 
            } else if(i == high) {
                return result;
            }
        }
        return result;
    }
    console.log(smallestCommons([1, 5]));