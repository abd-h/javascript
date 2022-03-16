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
    console.log(result);

