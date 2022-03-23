/*      Use an Array to Store a Collection of Data
    The below is an example og the simplest impementation of an array data structure. This is known as a one-dimensioinal array, meaning it only has one level, or that is does not have any other array nested within it. Notice it contains booleans, string, and numbers, among other valid JavaScript data types:        
*/

    let simpleArray = ["one", 2, "three", true, false, undefined, null];
    console.log(simpleArray.length); // return 7

    /*  All arrays have alength property, which s shown above, can be very easily accessed with the syntax Array.length. A more complex implementation of an array can be seen below. Thhis is known as 
    a multi-dimensional array, or an array that contains other arrays. Notice  that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, 
    all you need to know is that arrays are also capable of storing complex objects.  */

    let ocmplexArray = [
        [
            {
                one: 1, 
                two: 2
            },
            {
                three: 3,
                four: 4
            }
        ],
        [
            {
                a: "a",
                b: "b"
            },
            {
                c: "c",
                d: "d"
            }
        ]
    ];
    /*
    Access an Array's Contents Using Bracket Notaion
    the fundamental feature of any data structure is, of course, the ability to not only store data,
    but to be able to retrieve that data on command. So, now that we've learned how to craate an 
    array, let's begin to think about how we can access that array's information.

    Whe we define a simple array as seen below, there are 3 items in it:    */

    let ourArray = ["a", "b", "c"];

/* In na array, each array item has an index. This index doubles as the position of that item in 
    the array, and how you reference it. However, it is important to note, that JavaScript arrays are 
    zer-indexed, meaning that the first element of an array is actually at thezzerth position, not the 
    first. In order to retrieve an element of an array, or more commonly, to a variable which references
    an array object. This is known as bracket notation. For example, if we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:  */

ourArray[1] = "not b anymore";
/*  Using bracket notation, we have now reset the item at index 1 from the string b, to not b 
    anymore. Now ourArray is ["a", "not b anymore", "c"] 
    
    ***************************************************************************
    
    Add Items to an Array with push() and unshift
    An array's length, like the data type it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other
    words, arrays are mutable. In this challenge,  we will look at two methods with which we can
    programmatically modify an array: Arry.push() and Array.unshift().

    Both methods take one ore more elements as parameters and add those elements to the array the 
    method elements to the befinning. Consider the following:   */

    let twentyThree = "XXIII";
    let romanNumerals = ["XXI", "XXII"];

    romanNumerals.unshift("XIX", "XX");
//  romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII']

    romanNumerals.push(twentyThree);
/* romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Notive that we can 
    also pass variables by using push() and unshift() to add "I", 2, "three" to the beginning of 
    the array and 7, "VIII", 9 to the end so that the returned array contains representation of the 
    array and 7, "VII", 9 to the end so that the returned array contains representations of the 
    numbers 1-9 in oreder.     

    function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));*/


function mixedNumbers(arr) {
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
/*************************************************************************
 
    Remove Items from an Array with pop() and shift()
    Both push() and shift() have corresponding methods that are nearly functonal opposite: 
    pop() and shift(). As you may have guessed by now, instead of adding, pop() removes an 
    element from the end of an array, while shift() removes an element from the beginning.

    The difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single
    element at a time.

    let's take a look:          */

    let greetings = ["whats up?", "hello", "see ya!"];
    greetings.pop();
    console.log(greetings);
    // greetings would have the value ["whats up?", "hello"]

    greetings.shift();
    console.log(greetings); // returns ["hello"]


/*  We have defined a function, popShift, which takes an array as an argument and returns a new 
    array. Modify the function, using pop() and shift(), to remove the first and last elements of 
    the argument array, and assing the removed elements to their corresponding variables, so that the returned array contains their values. 

    function popShift(arr) {
    let popped; // Change this line
    let shifted; // Change this line
    return [shifted, popped];
    }

    console.log(popShift(['challenge', 'is', 'not', 'complete']));

    We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last element of the argument array, and assign the removed element to their corresponding variables, so that the returned array contains their values.

    function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete'])); */

    function popShift(arr) {
        let popped = arr.pop();
        let shifted = arr.shift();
        return [shifted, popped]
    }
    console.log(popShift(["challenge", "is", "not", "complete"]));

