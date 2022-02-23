/** 

    Factorialize a Number

    Return the factorial of the provided integer.

    If the integer is represented with the letter n,  a factorial is the prodict of all positive integers less than or n.
    
    Factorials are often represented with the shorthand notation n!
    
    for example: 5! = 1 * 2 *3 *4 *5 = 120
    
    Only integers greater than or equal to zero will be supplied to the function.*/
    
    function factorialize(num) {
       
        if(num < 1) {
            return 1;
        } else {
             num *=  factorialize(num - 1)
             
        }
        return num
    }

console.log(factorialize(5)); //should return a number.

console.log(factorialize(5)); //should return 120.

console.log(factorialize(10)); // should return 3628800.

console.log(factorialize(20)); // should return 2432902008176640000.

console.log(factorialize(0)); //should return 1.
