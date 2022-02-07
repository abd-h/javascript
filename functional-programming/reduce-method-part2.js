/* JavaScript's reduce method is one of the cornerstones of functional programming. 
Let's explore how it works, when you should use it, and osme of the cool things it can do.

A Basic Reduction
Use it when: You have an array of amounts and you want to add them all up.*/

const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount);
console.log(sum); // returns 118.11

/*
                        Finding an Average with the Reduce Method in JavaScript
Instead of logging the sum, you could divided the sum by the length of the array before you return a final value.

The way to do this is by taking advantage of the other arguments in the reduce method. The first of has looped over the array. the last argumrnt is the array itself. */

const average = euros.reduce((total, amount, index, array) => {
    total += amount;
    if(index === array.length-1) {
        return total / array.length;
    } else {
        return total;
    }
});

console.log(average);
/*
                Map and Filter as Reductions 
If you can use the reduce function to spit out an average then you can use it any way you want.

For example, you could double the total, or half each number before adding then together, or use an if
statement inside the reducer to only add numbers that are greater than 10. My point is that the Reduce Method In JavaScript gives you a mini codepen where you can write whatever logic you want. It will repeat the logic for each amount in the array and then return a single value.

The thing is, you don't always have to return a single value. You can reduce an array into a new array.

For instance, lets reduce an array of amounts into another array where every amount is double. 
To do this we need to set the initial value for out array to an empty array.

The initial value is the value of the total patameter when the reduction starts. You set the initial value by adding a comma followed by your initial value inside the parentheses but after the curly braces.
*/

const newAverage = euros.reduce((total, amount, index, array) => {
    total += amount;
    return total / array.length;
}, 0);
console.log(newAverage);

/* In previous examples, the initial value was zero so I ommited it. By ommiting the initial value, the total will default to the first amount in the array.

By setting the initial value to an empty array we can then push each amount into the total. If we want to reduce an array of values into another array where every value is doubled, ee need to push the amount * 2. then we return the total when there are no more amount to push.*/

const plusTen = [10, 20, 30, 40, 50];
const doubled = plusTen.reduce((total, amount, index, array) => {
    total.push(amount * 2);
    return total; 
}, []);
console.log(doubled); // returns [20, 40, 60, 80, 100]

/*We've created a new array where every amount is doubled. We could also filter out numbers we don't want to double by adding if statement inside our reducer. */

const plusTwenty = [10, 30, 50, 70, 90];
const filteredAndDoubled = plusTwenty.reduce((total, amount) => {
    if(amount < 70) {
        total.push(amount * 2);
    }
    return total;
}, []);
console.log(filteredAndDoubled);

/* These operations are the map and filter methods rewritten as reduce method.

For these esample, it would make more sense to use map or filter because they are simpler to use. The benefit of using reduce comes into play when you want to map and filter together and you have a lot  of data to go over. 

If you chain mapand filter together you are doing the work twice. You filter every single value and then tou map the remaining values. With reduce you can filter and then map ina single pass.

Use map and filter but when you start chaining lots of methods together you now know it is faster to reduce the data instead.

Creating a Tally with the Reduce Method In JavaScript

Use it when: You have a collection of items and you want to know how many of each item are in the collection. */ 

const fruitBasket = [
    'banana', 'cherry', 'orange', 'apple', 'cherry', 
    'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'
];

const count =fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {})
console.log(count); /* returns {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}

To tally items in an array out initial value must be an empty object, not an empty array 
like it was in  the last example.

Since we are going to be returning an object we can now store key-value pairs in the total.*/

const total1 = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = 1;
    return tally;
}, {});
console.log(total1); /* returns {banana: 1, cherry: 1, orange: 1, apple: 1, fig: 1}

On our first pass, we want the name of the first key to be our current value and we want to give it a
value of 1.

This gives us an object with all the fruit as keys, each with a value of 1. We want the amount of each 
fruit to increase if they repeat.

To do this, on our second loop we check if our total contain a key with the current fruit of the 
reducer. If it does't then we creat it. If it does then we increment the amount by one.*/

const tallyFruit = fruitBasket.reduce((tally, fruit) => {
    (!tally[fruit])? tally[fruit] = 1
    : tally[fruit] = (tally[fruit]) + 1;
    return tally;
}, {});
console.log(tallyFruit);/* In line 87 is the exact same logic in a more concise way up top.

            Flattening an array of arrays with the Reduce Method In JavaScript

We can use reduce to flatten nested amounts into a single array.

We se the initial value to an empty array and then concatenate the current value to the total.*/

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
    return total.concat(amount);
}, []);
console.log(flat);/* returns [1, 2, 3, 4, 5, 6, 7, 8, 9]

More often than not, information is nested in more complicated ways. For instance, 
lets say we just want all the colors in the data variable below.*/

const dataOfColors = [
    {a: "happy", b: "robin", c: ["green",  "blue"]},
    {a: "tired", b: "panther", c: ["green", "black", "orange", "blue"]}, 
    {a: "sad", b: "goldfish", c: ["green", "red"]}
];

/* We're going to step through each object and pull out the colours. We do this by pointing 
amount.c for each object in the array. We then use a forEach loop to push every value in the nested array into out total */

const colors = dataOfColors.reduce((total, amount) => {
    amount.c.forEach(a => total.push(a));
    return total;
}, []);
console.log(colors); /* ['green', 'blue', 'green', 'black', 'orange', 'blue', 'green', 'red']

If we only need unique number then we can check to see of the number already exist before we push 
it.*/

const uniqueColors = dataOfColors.reduce((total, amount) => {
    amount.c.forEach(a => {
        console.log(total);
       if(total.indexOf(a) === -1){
           total.push(a)
       }
    });
    return total;
}, []);

console.log(uniqueColors); /* returns ) ['green', 'blue', 'black', 'orange', 'red']

Piping with reduce
An interesting aspect of the reduce method in JavaScript is that you can reduce  over functions as well
as numbers and strings. 

Let's say we have a collection of simple mathematical functions. These functioins allow us to increment,
decrement, double and halve an amount. */

function increment(input) {
    return input + 1;
}

function decrement(input) {
    return input - 1;
}

function double(input) {
    return input * 2;
}

function halve(input) {
    return input / 2;
}

/* For whatever reason, we need to increment, then double, then decrement an amount.

You could write a function that takes an input, and returns (input +1) * 2 - 1.
The problem is that we know we are going to need to increment the amount three times, then double it, 
then decrement it, and then halve it at some point in the future. We don't want to have to have to 
reweite our function wvery time so we going to use reduce ot create a pipeline

A pipeline is a term used for a list of function that transform some initial value into a funal value.
Our pipeline will consist of our three functions in the order that we want to use them. */

let pipeline = [increment, double, decrement ];

/* Instead of reducing an array of values we reduce over our pipeline of functioins. This works 
because we set the initial value as the amount we want to transform. */

const result = pipeline.reduce((total, func) => {
    return func(total);
}, 1);

console.log(result); /* returns 3

Because the pipeline is an array, it can be easily modified. If we want to decrement somthing three times, then double it, decrement it, and halve it then we just alter the pipeline.*/;

let pipeline2 = [
    increment,
    increment, 
    double, 
    decrement,
    halve
];
console.log(pipeline2.reduce((total, func) => {
    return func(total)
}, 1));
/*
The reduce function stays exactly the same.

Silly Mistakes to avoid

If you don't pass in an initial value, reduce will assume the first item in your array is your initial value. This worked fine in the first few examples because we were adding up a list of numbers.

If you're trying to tally upfruit, and you leave out the initial value then things get weird. Not entering an initial value is an easy mistake to make and one of the first things you should check when debugging. 

Another common mistake is to forget to return te total. You must return somthing for the reduce function to work. Always double check and make sure that you're actually returning the value you want.
*/
