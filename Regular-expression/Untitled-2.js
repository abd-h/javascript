/*
    Basically in JavaScript there are 4 modes for this binding. Make that 5 if we include arrow functions.

In order of lowest priority to highest priority, here they are:

Default binding
Implicit binding
Explicit binding
New binding
Arrow functions
Gotchas and final notes
In this post we'll talk about explicit binding.

How explicit binding works
Explicit binding has even higher precedence than implicit binding.

We use it by using one of the three functions call, apply or bind, present in function objects.

call, apply and bind explicitly provide the value of this.

For example, when calling foo.call(obj), the value of this in foo becomes obj. The first argument passed in .call is the value of this you want the function to have.

call, apply and bind do the same thing in essence. They all bind the value of this, which they accept as their first argument.

But they have some slight differences.

.call
.call accepts additional arguments that are comma separated. They will be passed to the function call.

For example: foo.call(obj, argument1, argument2) does two things.

It makes this inside the function be obj.
It passes arguments to the function as though it was called with foo(argument1, argument2).
.apply
.apply is very similar, the only difference being that it accepts arguments in an array.

For example: foo.apply(obj, [argument1, argument2]) is how you would call the function using apply. It does two things.

It makes this inside the function be obj.
It passes arguments to the function as though it was called with foo(argument1, argument2).
.bind
.bind is slightly different. It returns your target function with the correct this. It doesn't call it immediately.

.bind is also referred to as "hard binding".
const obj = {};
function foo() {
  console.log(this);
}

const functionWithBoundThis = foo.bind(obj); // nothing is logged to the console
functionWithBoundThis(); // now we log obj to the console
 */