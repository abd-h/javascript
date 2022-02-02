/*              Use the reduce Method to Analyze Data

Array.prototype.reduce(), or simply reduce(), is themist general of all array operations in JavaScript.
You can solve almost any array processing problem using the reduce method.

The reduce method allows for more general forms of array processing, and it's prossible to show that 
voth filtere and map can be derived as special applications of reduce. the reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments:
        The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.
        
In addition to callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this secon parameter is not used, then the furst iteration is skipped and the second iteration gets passed the first  and second arguments.*/

const users = [
    {name: "John", age: 34},
    {name: "Amy", age: 20}, 
    {name: "comperCat", age: 10}
];

const sumOfAges = users.reduce((obj,user) => {
    obj[user.name] = user.age;
    return obj
},{})
console.log(sumOfAges);