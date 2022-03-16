/*          Stirng.prototype.split()
The split() method divides a String into an ordered list of substrings, puts these substrings
innto an array, and returns the array. Division is done by searching for pattern; where the pattern is provided as the first parameter in the method's call.
*/

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]); // returns fox

const chars = str.split('');
console.log(chars[8]); // returns k

const strCopy = str.split().join(' ');
console.log(strCopy);
console.log(strCopy.split(","));

/*
    Syntax
    split()
    split(seperator)
    split(seperator, limit) 
    
    Parameters 
    seperator Optional
    The pattern describing where each split should occur. The separator can be simple string or 
    it can be a regular expression.
    
    The simplest case is when separator is just a single character; this is used to split a delimited string. For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t") */

    const myString = 'The quick brown fox jumps over the lazy dog.';
    const mystr = myString.split("\t");
    console.log(mystr); /* ['The quick brown fox jumps over the lazy dog.']
   .     If separator is omitted or does not occur in str, the returned array contains one 
         element consisting of the entire string.

    .   If separator appears at the geginning (or end) of the string, it still has the effect of splittin. The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.     

    .   If separator is an empty string (""), str is converted to an array of each of its UFT-16 
        "characters".

    limit optional
    Anon-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string art each occurence of the specified seperator, but stops when limit enteries have been placed in the array. Any leftover text is not included in the array at all.
    
    .   The array may contain fewer entries than limt if the end of the string is reached before 
        the limit is reached.

    .   If limit is 0, [] is returnned.

    Returned value
    An Array of strings, split at each point where the sepetator occurs in the given string.

    Description
    When found, separator is removed from the string, and the substrings are returned  in an array.

    .   If separator is a regular expression with capturing paranthesis, then each time separator 
        matches the results (including any undefined results) of the capturing parantheses are 
        spliced into the output array.

    .   If the separator is an array, then that Array is coerced to a String and used as a      
        separator.
    
    Exampes
    Using split()
    When the string is empty and no separator is specified, split() returns an array containing one empty string, rather than an empty array. If the string and separator are both empty strings, an empty array is returned. */

    const emptyString = "";
    console.log(emptyString.split()); // returns [""]

    // string and separator are both empty strings
    console.log(emptyString.split(emptyString)); // returns []

/* The following example defines a function that splits a string into an array of strings using separator. After splitting the string, the function logs messages indicating the original string 
(before the split), the separator used, the nummber of elements in the array, and the individual
array elements. */

function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);


    console.log("The original string is: ", stringToSplit);
    console.log("The separator is: ", separator);
    console.log("The array has ", arrayOfStrings.length, "elements: ", arrayOfStrings.join(" / "));
 
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);

/*
    The original string is: "Oh brave new world that has such people in it."
    The separator is: " "
    The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

    The original string is: "Oh brave new world that has such people in it."
    The separator is: "undefined"
    The array has 1 elements: Oh brave new world that has such people in it.

    The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
    The separator is: ","
    The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec 
    ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    
    Removing spaces from a string
    In the following example, split() looks for zero or more spaces, followed by a semicolon, followed by zero or more spaces-and, when found, removes the spaces and the semicolon from the string.
    
    nameList is the array returned as a result of split(). */
    
    const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand";
    console.log(names);

    const re = /\s*(?:;|$)\s*/;

    const namesList = names.split(re);
    console.log(namesList); // ['Harry Trump', 'Fred Barney', 'Helen Rigby', 'Bill Abel', 'Chris Hand']

    /*
    Returning a limited number of splits
    In the following example, split() looks for spaces in a string and returns the first 3 splits that it finds. */

    const myString2 = "Hello World. How are you doing?";
    const splits = myString2.split(" ", 3);
    console.log(splits); // ['Hello', 'World.', 'How']

    /* 
    Spliting with a RegExp to include parts of the seperator in the result
    If separator is a regular expression that contains capturing parantheses (), matched results are
    included in the array
    */

    const myString3 = "Hello 1 word. Sentence number 2";
    const splits2 = myString3.split(/(\d)/);
    const splits3 = myString3.split(/\D/);
    console.log(splits2);
    console.log(splits3.join("")); // 1 2
    console.log(myString3);

    