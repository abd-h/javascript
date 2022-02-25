/*  String.prototype.substring()

The substring() method returns the part of the string between the start and indexes, or to the end of the string. */

const str = "Congratulations";
const newStr = str.substring(0, 7);
console.log(newStr); // Congrat
let c = str.length -newStr.length;
console.log(c); // 8

console.log(str.substring(c));

/** Syntax
    
    substring(indexStart);
    substring(indexStart, indexEnd);

    Parameters
    indexStart
    The index of the first characterto include in the  return substring.

    indexEnd Optional
    The index of the first character to exclude from the returned substring.

    Return value
    A new string containing the specified part of the given string.

    Description 
    substring() extracts characters from indexStart up to but not including indexEnd. in particular:

    If indexEnd is omitted, substring() extracts characters to the end of the string.
    If indexStart isequal to indexEnd, then the effect of substring() is as if the two arguments 
    were swepped; sea example below.

    Any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length, respectively.

    Any argument value that is NaN is treated as if it were 0.

            Example
            Using substring()
    The following example uses substring() to display character from the string "Buckwheat" . */

    let thatStr = "Buckwheat";

    // Displays B
    console.log(thatStr.substring(0, 1)); 
    console.log(thatStr.substring(1,0)); 

    // Displays Buckwh
    console.log(thatStr.substring(0, 6));
    console.log(thatStr.substring(6, 0));

    // Displays wheat
    console.log(thatStr.substring(4));
    console.log(thatStr.substring(4, 9));
    console.log(thatStr.substring(9, 4));

    // Displays Buckwheat 
    console.log(thatStr.substring(0, 9));
    console.log(thatStr.substring(0,10));

    /* Using substring() with length property
    the following example uses the substring() method and length property to extract the last characters of a paticular string. This method may be easier to remember, given that you don't 
    need to know the starting and ending indeces as you would in the above examples. */

    // Display eat
    let thatStr2 = "Buckweat";
    let anyString3 = thatStr2.substring(thatStr2.length -3);
    console.log(anyString3); // Displays eat.

    /** The difference between substring() and substr().
    There's a subtle difference between the substring() and substr() methods, so you should be careful not to get them confused.

    The arguments of substring() represent the starting and ending indexes, while the arguments of substr() represent the starting index and the number of characters to include in the returned string.

    Furthermore, substr() is considered a legacy feature in ECMAScript and could be removed from 
    future versions, so it is best to avoid using it possible. */

    let text = "Buckwheat";
    console.log(text.substring(2,5)); // ckw
    console.log(text.substr(2,3)); // ckw

    /* Difference between substring() and slice()
    The substring() and slice() methods are almost identical, but there are couple of subtle  
    differences between the two, especially in the way negative arguments are dealt  with.

    The substring() method swaps its two argument if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case
    . */

    let text2 = "Buckwheat";
    console.log(text2.slice(5,2)); // ""
    console.log(text2.substring(5, 2)) // ckw

    // If either or both of the arguments are negative or NaN, the substring() method treats them //
    // as if they were 0.

    console.log(text.substring(-5, 2)); // Bu
    console.log(text.substring(-5, -2)); // ""

    // slice() also treats MaM arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

    console.log(text.slice(-5, -2)); // => whe
    console.log(text.slice(-5, 2)); // => ""

    /* The follwing example repaces a substring within a string. It will replace both individual characters and substrings. The function call at the end of the example changes the string Brave new World to Brave New Web. */

    // Replace oldS with newS in the string fullS

    function replaceString(oldS, newS, fullS) {
        for(let i = 0; i < fullS.length; i++) {
        for (let i = 0; i < fullS.length; ++i) {
            if (fullS.substring(i, i + oldS.length) == oldS) {
            fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
                }
            }
        return fullS
        }
    }

console.log(replaceString('World', 'Web', 'Brave New World'));

// Note that this can result in an infinite loop if oldS is itself a vubstring of newS - for
//example,  if you attempted to replace "World" with "Other World" here.

// A better method for replacing strings is as follows:

    function replaceString1(oldS, newS, fullS) {
        return fullS.replace(fullS.substring(fullS.length -oldS.length), newS)
    }
    console.log(replaceString1('World', 'Web', 'Brave New World'));

    // 2and way of doing it
    function replaceString2(oldS, newS, fullS) {
        return fullS.substring(0, (fullS.length - oldS.length)).concat(newS);
    }
    console.log(replaceString2('World', 'Web', 'Brave New World'));

// Third way of doing it

function replaceString3(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS)
}
console.log(replaceString2('World', 'Web', 'Brave New World'));