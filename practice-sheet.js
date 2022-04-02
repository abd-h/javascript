/* Recursion is a process of calling itself. A function that calls itself is called a recursive function.

The syntax for recursive function is:

function recurse() {
    // function code
    recurse()
    // function code
} 
recurse();

Here, the recurse() function is a recursive function. It is calling itself inside the function.

A recursive function must have a condition to stop calling itself. Otherwise, the function is  called indefinitely.

Once the condition is met, the function stops calling itself. This is called a base condition.

To prevent infinite recursion, you can use if...else statement (or similar approach) where one brance makes the recurseve call, and the other does't.

So, it generally looks like this.

function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}
recurse();

A simple example of a recursive function would be to count down the value to 1.

Example one: Print numbers  */

function countDown(number) {
    console.log(number);
    let s = [];
    // s.push(number)
    if(number < 0) {
        return 0;
    } else {
   
          return ( countDown(number -1) )
         
    }
    return s
}
console.log(countDown(2))


let count = 1;
function recursiveFn() {
    console.log(`Recursive ${count}`);
    if(count === 10) return;
    count++;
    recursiveFn();
}
recursiveFn();