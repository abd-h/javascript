/* Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius
times 9/5, plus 32. 

You are given a variable celsius representing a teperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mention above to help convert the Celsius temperature to  Fahrenheit. */

function convertToF(celsius) {
    let fahrenheit = (celsius * 9) / 5 +  32;
    return fahrenheit;
}

console.log(convertToF(0)); //  returns a number

console.log(convertToF(-30)); //  returns of -22

console.log(convertToF(-10)); //  returns of 14

console.log(convertToF(0)); //  returns of 32

console.log(convertToF(20)); //  returns of 68

console.log(convertToF(30)); //  returns of 86