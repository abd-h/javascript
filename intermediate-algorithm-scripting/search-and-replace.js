/* Search and Replace
    Perform a search and replace on the sentence usstr[i]ng the arguments provstr[i]ded and return the new sentence. 

    First argument is the sentence to perform the search and replace on.

    Second argument is the word that you will be replacing (before).
    'Third argument is what you will be replaceing the second argument with (after).

    Note: Preserve the case of the first character in the original word when you are replacing it. 
    For ecample if you mean to replace the word Book with the word dog, it should be repalce as Dog.
    
    The Plan
    1. Declare three variables  
    2. search str for before using for loop
    3. Check before for capitalization. If before is not capitalized  replace it with a all lowercase after in the str.
        else replace before with capitalize after

    */

     
    function myReplace(str, before, after) {
        let aft = after[0].toUpperCase().concat(after.split("").slice(1).join(''));
        let bef = before[0].toUpperCase().concat(before.split("").slice(1).join(""))
        let s = str.split(" ");
        for(let i = 0; i < s.length; i++){
           if(s[i] == before && before[0] == before[0].toLowerCase()) {
               return str.replace(s[i], after.toLowerCase());
           } else if(s[i] == before && before == bef) {
               return str.replace(s[i], aft);
           }
        }
    }

    console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
    
    console.log(myReplace("Let us go to the store", "store", "mall")); //  returns the string Let us go to the mall.

    console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //  returns the string He is Sitting on the couch.

    console.log(myReplace("I think we should look up there", "up", "Down")); //  returns the string I think we should look down there.

    console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); //  returns the string This has a spelling error.

    console.log(myReplace("His name is Tom", "Tom", "john")); //  returns the string His name is John.

    console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); //  returns the string Let us get back to more Algorithms.
