/*  Missing Letters
    Find the missing lettter in the passed letter range and return it.
    
    If all letters are present in the range, return undefined.
    
    The Plan
    1.  Make a copy of the str in order to a void mutation.
    2.  Declare a variable called alphabet and assign all the alphabet to it.
    3. Use if statement to find the index of the first letter of the str in the alphabet variable.
        if found then copy letters starting from that index all the way to length of the string plus one.
    */



    function fearNotLetter(str) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz".split(""),
        newStr;
         if(alphabet.length == str.length){
           return undefined;
        } else if(alphabet.indexOf(str[0]) !== -1){
           newStr = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[0]) + str.length);
           return newStr.filter(a => {
               if(str.indexOf(a) == -1) {
                   return a 
                }
            }).join("");
        } 
    }

    console.log(fearNotLetter("abce")); //  returns the string d.

    console.log(fearNotLetter("abcdefghjklmno")); //  returns the string i.

    console.log(fearNotLetter("stvwx")); //  returns the string u.

    console.log(fearNotLetter("bcdf")); //  returns the string e.

    console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //  returns undefined.