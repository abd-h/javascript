/*  Sum All Odd Fibonacci Numbers
    Given a positive integer num, return the sum of all odd Fibonacci nubers that are less than or equal to num. 
    
    The first two numbers in the Fibonacci sequence are 1 and 1. Wvery additional number in the sequence is the sum of the two prvious numbers. The first six numbers of the Fibonacci sequence are 1, 1 2, 3, 5 and 8
    
    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1 2, 3 and 5.
    */
   function oddNums(num) {
       return num % 2 == 1;
   }
   console.log(oddNums(9));

    function sumFibs(num) {
        let fib1= [1,1];

        for(let i = 1; i < num; i++) {
               fib1.push(fib1[i] + fib1[i - 1]);
            }
            
        return fib1.reduce((a, b) => {
          if(oddNums(b) && b <= num) {
                 a += b
          }
                return a
        }, 0);
    }
    console.log(sumFibs(1)); // returns a number.

    console.log(sumFibs(1000)); // returns 1785.

    console.log(sumFibs(4000000)); // returns 4613732.

    console.log(sumFibs(4)); // returns 5.

    console.log(sumFibs(75024)); // returns 60696.

    console.log(sumFibs(75025)); // returns 135721.