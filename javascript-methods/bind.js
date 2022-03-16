/*  bind() method
    Working with JavaScript "this" kewword can be tricky. Not knowing the background rules may end up with the famous "it works, but I don't know why" or worse: "it doestn't work and I don't know why". Its good to know the theory before putting things into practice. call(), apply and bind() can be handy when setting the "this" value. 
    
    Basic rules worth remembering:
    "this" always refers to an object.
    "this" refers to an object which calls the function it contains.
    In the global context "this" refers to either window object or is undefined if 'strict mode' is used;    */

    const car = {
        registrationNumber: "LM50YTT",
        brand: "Vauxhall Astra",
        displayDetails(ownerName){
            return `${ownerName} ${this.registrationNumber} ${this.brand}`
        }
    };
    // The above will work find as long as we used it this way:
    console.log(car.displayDetails( ))//;LM50YTT Vauxhall Astra

    const myCar = {
        registrationNumber: 'LM10YNN',
        brand: 'Honda'
    };
    console.log(myCar);
    
    console.log('::::::::::::::::::::::::::::::::::');

    let myCarDetails = car.displayDetails.bind(myCar);
    console.log(myCarDetails("JAMES"));
//****************************************************************** */

// Let's have a look at an example below:

const user = {
    name: "Thoma Tucal",
    title: "Manager",
    team: "Chelsea",
    medels: function() {
        return `Won the Champions League Winner with ${this.team}`
    },
    status (){
        return ` ${this.team} ${this.title}`
    }
};


const unboundFunc = user.status;
console.log(unboundFunc());// returns undefined undefined undefined

// bound function
const boundFunc = unboundFunc.bind(user)
console.log(boundFunc()); // returns Chelsea Manager

/******************************************************************************* */

// Example 1

function sum1(b) {
    return this.a + b;
}

const obj = {
    a: 35, 
    b: 40
};

const fn = sum1.bind(obj);
console.log(fn(15)); // 50

// Example 2 (arrow function)
const sum2 = (a, b, c) => a + b +c;

const func = sum2.bind(this, 15, 25);
console.log(func(10)); // 50

// Example 3

function sum3(b, c) {
    return this.a + b + c;
}

const obj2 = {
    a: 20
};

const func2 = sum3.bind(obj2, 20);
console.log(func2(15)); // 55


// Example 4

let obj3 = {a: 10};

let total = (function add(num, num2) {
    return this.a + num + num2;
}).bind(obj3, 15, 5);

console.log(total()); // 30
/************************************************************************************ 

    Function Borrowing 
    With the bind() method, an object can borrow a method from another object.

    The example below creates 2 object (person and member).

    The member object borrows the full name method from the person object:  */

    const person = {
        firstName: "John",
        lastName: "Doe",
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    const member = {
        firstName: "Steve", 
        lastName: "Hoddle"
    };

    let fullName = person.fullName.bind(member)
    console.log(fullName());

// More practice to follow

/*  Basically in JavaScript there are 4 modes for this binding. Make that 5 including arrow function.

    In order of lowest priority to highest priority, here they are:

    Default binding
    Implicit binding
    Explicit binding
    New binding
    Arrow functions 


    How explicit binding works
    Explicit binding has even higher precedence than implicit binding.

    We use it by using one of the three functions call, apply or bind, present in function objects.

    call, apply and bind explicitly provide the value of this.

    For example, when calling foo.call(obj), the value of this in foo becomes obj. The first argument passed in .call is the value of this you want the function to have.

    call, apply and bind do the same thing in essence. They all bind the value of this, which they eccept as their first argument.

    But they have some slight difference.

    .call
    .call accepts additional arguments that are comma separated. They will be passed to the function call.

    For example: foo.call(obj, argument1, argument2) does two things.

    1. It makes this inside the function be obj.
    2. It passes arguments to the function as though it was called with foo(argument1, argument2).
    
    .apply
    .apply is very similar, the only difference being that it accepts arguments in an array.
    
    For example: foo.apply(obj, [argument1, argument2]) is how you would call the function using apply. It does two things.

    1. It makes this inside the function be obj.
    It makes this inside the function as though it wa called with foo(argument1, argument2).

    .bind() 
    .bind is slightly different. It returns your target function with the correct this. It doesn't call it immediately.
    
    .bind is also referred to as "hard binding".

    For example: */

    const myObj = {};
    function foo() {
        console.log(this);
        return this;
    }

    const functionWithBoundThis = foo.bind(obj); // nothing is logged to the console
    console.log(functionWithBoundThis());
