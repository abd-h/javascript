/* Use the Rest Parameter with Function Parameters

In order to help us create more flexible funcitons, ES6 introduces the rest parameter
for function parameters. With rest parameter, you can create functions that take a variable number 
of arguments. These argumrnts are stored in an array that can be accessed later from inside the function.

Check this code: */

function howManyArgs(...args) {
    return "You have passed " + args.length + " arguments."
}
console.log(howManyArgs("String", null, [1, 2, 3], {})); /* returns you have passed 4 arguments.

The rest parameter eliminamtes the need to chekk the args array and allow us to apply
map(), filter(), and reduce() on the parameters array.
 
Modify the function sum using the rest parameter in such a way that the function sum is able to take 
any number of arguments and return their sum.

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}*/

const sum = (...args) => {
    return args.reduce((total, item) => total + item, 0);
}

 console.log(sum(0,1,2)); // returns 3

 console.log(sum(1,2,3,4)); // returns 10

 console.log(sum(5)); // returns 5

 console.log(sum()); // returns 0

//sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.