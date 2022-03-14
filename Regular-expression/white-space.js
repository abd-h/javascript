/*
    Match Whitespace
    The challenges so far have covered matching letters of the alphabet and numbers.
    You can also match the whitespace or spaces between letters.

    You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [\s\t\f\n\v].
    */
   let whiteSpace = "Whitespace. Whitespace everywhere!";
   let spaceRegex = /\s/g;
   const resultS = whiteSpace.match(spaceRegex);
   console.log(resultS);


   // Challenge
   // Change the regex countWhiteSpace to look for multiplw whitespace character in a string.

   const sampleWs = "Whitespace is important in separating words";
   const countWhiteSpace = /\s/g;
   const resultWs = sampleWs.match(countWhiteSpace).length;
   console.log(resultWs);
   /*************************************************************************
    
   Match Non-Whitespace Characters
   You learned about searching for whitespace using \s, with a lowercase s. You can also search for  everthing except whitespace.

   Search for non-whitespace using \S, which is an uppercase S. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being
   similar to the character class [^\s\t\n\f\v]. */

    const nonWhiteSpace = "Whitespace. Whitespace everywhere!";
    let nonWhiteSpaceRegex = /\S/g;
    const nonWhiteSpaceResult = nonWhiteSpace.match(nonWhiteSpaceRegex).length;
    console.log(nonWhiteSpaceResult); // 32

    /********************************************************************
    Secify Upper and Lower Number of Matches
    Rcall that you use the plus sign + to look for one or more characters and the asterisk *
    to look for zore or more characters.  These are convenient but sometimes you want to match a certain range of patterns.

    You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({and}). You put two numbers between the curly brackets 
    for the lower and upper number characters.

    For example, to match only the letter appearing between 3 and 5 times in the string ah, your 
    regex would be /a{3, 5}h/. */

    let a4 = "aaaah";
    let a2 = "aah";
    let multipleA = /(a{3,5}h)/;
  
    console.log(multipleA.test(a4)); // returns  true
    console.log(multipleA.test(a2)); // returns false


    // Change the regex ohRegex to match the entire phrasse Oh no only when it has 3 to 6 letter h's.
    
    const ohStr = "Ohhh no";
    const ohRegex = /Oh{3,6}\sno/
    console.log(ohStr.match(ohRegex)); // ["Ohhh"]
    console.log(ohRegex.test(ohStr)); // true
/*****************************************************************************************
 * 
    Specify Only the Lower Number of Matches
    You can specify the lower and upper number of patterns with quantity specifiers using curly brackers. Sometimes you only want to specify the lower number of patterns with no upper limit.

    To onlly specify the lower number of patterns, keep the first number followed by a comma.

    For example, to match only the string hah with the letter a appearing at leat 3 times, your regex would be /ha{3,}h/.   */

    let A4 = "haaaah";
    let A2 = "haah";
    let A100 = "h" + "a".repeat(100) + "h";
    console.log(multipleA.test(A4));
    console.log(multipleA.test(A2));
    console.log(multipleA.test(A100));

    // change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
    let hasStr = "Hazzzzah";
    let haRegex = /Haz{4,}ah/;
    let resultHz = haRegex.test(hasStr);
    console.log(resultHz);
    console.log(hasStr.match(haRegex))

    // To specify a certain number of patterns, just have that one number between the curly brackets.

    let timStr = "Timmmmber";
    let timRegex = /Tim{4}ber/;
    let result = timRegex.test(timStr);
    console.log(result);

/*  Check for All or None  
    Sometimes the patterns you want to search for may have parts of it that may not exist.
    However, it may be important to check for them noneless. 
    
    You can specify the possible existance of an element with aquestion mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

    For example, there are slight differences in American and British English and you can use the question mark to match both spellings. */

    let american = "color";
    let british = "colour";
    let rainbowRegex = /colou?r/;
    console.log(rainbowRegex.test(british));
    console.log(rainbowRegex.test(american))