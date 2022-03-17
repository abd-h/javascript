/*  Positive and Negative Lookahead
    Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns 
    further along. This can be useful when you want to search for multiple patterns over the same string.

    There are two  kinds of lookaheads: positive lookahead and negative lookahead.

    A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

    On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is return if the negative lookahead part is not present.

    Lookaheads are a bit confusing but a bit of example will help.  */

    let quit = "qu";
    let notquit = "qt";
    let quRegex = /q(?=u)/;
    let qRegex = /q(?!u)/;
    console.log(quit.match(quRegex));
    console.log(notquit.match(qRegex));

    // Both of these match calls would return ["q"].

/*  A more practical use of lookaheads is to check two or more patterns in one string. 
    Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:    */

    let password = "abc123";
    let checkPass = /(?=\w{3,6}(?=\D*\d))/;
    console.log(checkPass.test(password)); /* returns true


    Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and 
    have two consecutive numbers. */

    let sampleWord = "111145";
    let pwRegex = /(?!\d{5})(?=\w{5,})(?=\D*\d\d)/;
    let result = pwRegex.test(sampleWord);
    console.log(result); /* This pattern make sure no five consecutive number are matched and 
    therefore returns false 
    ************************************************************************
    
    Check For Mixed Grouping of Characters
    Sometimes we want to check for groups of  characters using a Regular Expression and to achieve that we use parentheses ().

    if you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression:  /P(engu|umpk)in/g;

    Then check whether the desired string groups are in the test string by using the test() method.
    */

    let testStr = "Pumpkin";
    let testRegex = /P(engu|umpk)in/;
    console.log(testRegex.test(testStr));/* The test method here would return true
    
    Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concession for middle names.
    
    Then fix the code so that the regex that you have created is checked against myString and either true or is returned depending on whether the regex matches.
    
    let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works */ 

    let myString = "Franklin D. Roosevelt";
    let myRegex = /(Franklin\s[a-z]{1,}\D\s|Eleanor\s)Roosevelt/gi;
    console.log(myString.match(myRegex)); /* returns true 
    ***************************************************************************
    
    Reuse Patterns Using capture Groups
    Say you want to match a word that occurs multiple times liek below.  */

    let repeatStr = "row row row your boat";

    /* You could use /row row row/, bur what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.
    
    capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+).

    The substring matched by the group is saved to a temporary "variable", which can be accessed 
    within the same regex using a backlash and the number of the capture group (e.g. \1). 

    Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting ar 1.
    
    The example below matches a word that occurs thrice seperated by spaces:  */

    let repeat = /(\w+) \1 \1/;
    console.log(repeat.test(repeatStr)); // returns true
    console.log(repeatStr.match(repeat)) // returns  ["row row row", "row"]
    /* Using the .match() method on a string will return an array with the matched substring, along with its captured groups. 
    
    Use capture groups in reRegex to match a string that consists of only the same number repeated
    exactly three times separated by a single spaces.
    
    let repeatNum = "42 42 42";
    let reRegex = /change/; // Change this line
    let result = reRegex.test(repeatNum);*/

    let repeatNum = "42 42 42 42";
    let reRegex = /^(\d+) \1 \1$/g;
    let resultRe = reRegex.test(repeatNum);
    console.log(repeatNum.match(reRegex))
    console.log(resultRe);
