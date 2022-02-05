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

const count = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally

}, {});
console.log(count); // returns 

