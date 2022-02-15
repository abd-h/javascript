/* Assigning to new variables names and providing default values.
Aproperty can be both:
    Unpacked from an object and assigned to a variable with adifferent name.
    Assigned a default value in case the unpacked value is undefined.*/

const {a: aa = 10, b1: bb = 5} = {a: 3};
console.log(aa);// returns 3
console.log(bb); // returns 10

// Unpacking fields from objects passed as a function parameter

const user = {
    id: 42, 
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        last: "Name"
    }
};

function userId({id}) {
    return id;
}
console.log(userId(user));

function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`
}
console.log(whois(user));

// This unpacks the id, displayName and furstName from the user object and prints them.

// Setting a function parameter's default value
function drawChart({size= "big", coords = {x:0, y: 0}, radius =  25} = {}) {
     return {size, coords, radius}
}
 const charts = drawChart({
    coords: {x: 18, y: 30}, 
    radius: 30
});
console.log(charts); /*
Note: In the function signature for drawChart above, the destructured left-hand is assigned to  an empty object literal on the right-hand side:

{size = "big", coords = {x: 0, y: 0}, radius} = {}

You could have also written the function without the right-hand side assignment. However, if you
leave out the right-hand side assignment, the function will look for at least one argument to be 
supplied when envoked, whereas in its current form, you can call drawChart() without supplying any
parameters. The current design is useful if you want to be able to call the function without 
supplying any parameters. The other can be useful when you want ot ensure an object is passed to  
the function.
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

// Nested object and array destructuring
const metadata = {
    title: "Scrachpad",
    translation: [
        {
            local: "de",
            localazation_tags: [],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        }
    ], 
    url: "/en-US/docs/Tools/Scratchpad'"
};

let {
    title: englishTitle,
    translation: [
        {
            title: localeTitle, // rename
        },
    ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // JavaScript-Umgebung

// For iteration and destructuring
const people = [
    {
        name: "Mike Smith",
        family: {
            mother:  "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith"
        }, 
        age: 35
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones"
        }, 
        age: 25
    }
];

for (const {name: n, family: {father: f}} of people) {
    console.log("Name: " + n + ", Father: " + f);
}
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Computed object property names and destructuring

Computed property names, like on object literals, can be used with destructuring.*/

let key = "z";
let {[key]: foo} = {z: "bar"};
console.log(foo); // bar

/**             Rest in Object Destructuring 
 * The Rest/Spread properties for ECMAScript proposal (stage 4) adds the rest syntax to 
 * destructuring.Rext properties called the remaining own enumerable property keys that 
 * are notpicked off by the destructuring pattern.
 */
let { a1, b1, ...rest} = {a1: 10, b1: 20, c: 30, d: 40};
console.log(a1); // 10
console.log(b1); // 20
console.log(rest); // {c: 30, d: 40}

/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * 
 * Invalid JavaScript identifier as a property name
 * 
 * Destructuring can be used with property names that are not valid JavaScript identifiers by 
 * providing an alternative identifier that is valid.
 */

const foo1 = {"fizz-buzz": true};
const {"fizz-buzz": fizzBuzz } = foo1;
console.log(fizzBuzz); // true

/**     Combine Array and Object Destructuring 
 * Array and Object destructuring can be conbined. Say you want the third element in the array props below and the you want the name property in the object, you can do the following:
 */

const props = [
    { id: 1, name: "Fizz"},
    { id: 2, name: "Buzz"},
    { id: 3, name: "FizzBuzz"}
];

const [,,{name}] = props;
console.log(name); // FizzBuzz
/**
 * The prototype chain is looked up when the object is deconstructed.
 * When deconstructing an object, if a property is accessed in itself, it will continue to look up along the prototype chain.
 */

let obj = { self: '123'};
obj.proto = '456';
console.log(obj.self); // "123"
console.log(obj.proto); // 456

