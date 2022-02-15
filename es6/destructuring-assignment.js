/*    Use Destructuring Assignment to Extract Values from Objects

Destructuring assignment is special sytax introduced in ES6, for neatly assigning values 
taken directly from an object.

Consider the following ES5 code:*/

const user = { name: "John Doe", age: 34};

const name1 = user.name;
const age1 = user.age;
// name would have  avalue of the string John Doe, and  age would have number 34.

const {name, age} = user;
console.log(name, age); // returns John Doe

/* Here, the name and age variables would created and assigned the values of their 
respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object you want.

Replace the two assignments with an equivalent destructuring assigment. It should still assign the 
variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERRURE
object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line*/


const HIGH_TEMPERATURES = {
    yesterday: 75, 
    today: 77, 
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow);

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Destructuring Assignment to Assign Variable from Objects

Destructructing allows you to assing a new variable name when exracting values. You can do this by 
puting the new name after a colon when assgning the value.

Using the same object from the last example: */

const newUser = { name: "John Smith", age: 34};

// Here's how you can give new variable names in the assignment;
const { name: userName, age: userAge} = newUser;
/* You read it as "get the value of user.name and assign it to a new variable nameed userName" 
and so on. The value of userName would be the string John Doe, and  the value of userAge would be the
number 34.

Replace the two assignments with an equivalent destructuring assgnment. It should still assgn the 
variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TE MPERATURE
object.

// Only change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
*/

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Use Destructuring Assignment to Assign Variables from Nested Objects

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:*/

const userProfile = {
    johnDoe: {
        dob: '20.12.1982', 
        email: "johnDoe@freeCodeCamp"
    }
};

// Here's how to extract the values of object properties and assign them to variables with the same name:

const {johnDoe: {dob, email}} = userProfile;
console.log(dob, email);// 20.12.1982 johnDoe@freeCodeCamp

/* Replace the two assignments with an equivalent destructuring assignment. It should still assign the 
vaeiables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST
object. 

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line*/

const LOCAL_FORECAST = {
    yesterday: {low: 61, high: 75},
    today: {low: 64, high: 77},
    tomorrow: {low: 68, high: 80}
};

const {today: {low: lowToday1, high: highToday1}} = LOCAL_FORECAST;
console.log(lowToday1, highToday1); /* returns 66, 77
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Use Destructuring Assgnment to Assignment to Assign Variables from Arrays

ES6 makes destructuring arrays as easy as destructuring objects. 

One key difference between the spread ooperator and destructuring is that the spread
operator unpacks all contents of an array into a comma-separated list. Consequently,
you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:*/

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
/* The console will display thevalues of a and b as 1, 2.

The variable a is assigned the first value of the array, and b is assigned the second value of 
the array. We can also access the value at any index in an array with destructuring by using commas to 
reach the desired index:*/

const [c, d,,,e] = [1, 2, 3, 4,5, 6];
console.log(c, d, e); /* The console will log c, d, and e as 1,2 5.

Use destructuring assignment to swap the values of f and g so that f recieves the values stored in g,
and g recieves the value stored in f.
 
let f = 8, g = 6;
// Only change code below this line*/

let f = 8, g = 6;
console.log(f, g);
[f, g] = [g, f];
console.log(f, g); /* returns 6 and 8 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Use Destructuring ASsignment with the Rest Parameters to Teassign Array Elements

In some situation invoving array destructuring, we might want to collect the rest of the 
elements into a separate array.

The result is similar to ArrayPrototype.slice(), as shown below:*/

const [h, i, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(h, i); // returns 1, 2
console.log(arr); /* returns [3, 4, 5, 6, 7]

Variables h and i take the first and second values from the array. After that, because of the rest 
parameter's presence, arr gets the rest of the values in the form of an array. The rest element only
works correctly as the last variable in the list. As in you cannot use the rest parameter to catch a 
subarray that leaves out the last element of the original array.

Use destructuring assignment with the rest parameter to perform an effective array.prototype.slice() 
so that arr is sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);*/
const  source = [1,2, 3, 4,5,6, 7,9, 10];

function removeFirstTwo(list) {
    const [,,...arr] = list;
    return arr
 
}
const arr1 = removeFirstTwo(source);
console.log(arr1); /* returns [3, 4, 5, 6, 7, 9, 10]
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Use Destructuring Assignment to Pass an Object as a function's Parameters

In some cases, you can destructure the object in a function argument itself.

consider the code below:*/

const profile = {
    name: "James Bond 007",
    age: 40, 
    nationality: "British", 
    location: "London"
}

const profileUpdate = (profileData) => {
    const {name, age, nationality, location} = profileData;
    return{ name, age, nationality, location};
}
const newProfile = profileUpdate(profile);
console.log(newProfile); /* returns {name: 'newBond', age: 35, nationality: 'British', location: 'London'}

This effectively destructuresthe object sent into the function.  This can also be done in-place:*/

const someProfile = ({name: actor, age, nationality, location}) => {
    return {actor};
}
console.log(someProfile(profile));/* {actor: 'James Bond'}

When profileData is passed to the obove function, the values are destructured from the function 
parameter for use within the function.

Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line*/

const stats = {
    max: 56.78, 
    standard_deviation: 4.34, 
    madian: 34.85, 
    min: -0.75, 
    average: 35.85
};

const half = ({max, min}) => (max + min) / 2;
console.log(half(stats));