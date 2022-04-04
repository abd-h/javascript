/*
    Pig Latin 
    Pig Latin is a way of altering English Words. the rules are as follows:
        .   If  a word begins with a consonant, take the first consonant or consonant cluster, 
            move it to the end of the word, and add ay at the end
            
            if word ends a vowel just add way at the end of it.
            
   Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.         */

   // The Plan
   /* 
   . Find the a constant or cluster of constants and assign it to a variable called constants.
   . Find the length of the constants variable and assign it to constCluster.
   . use ternary operator to check if the first letter of str is  strictly equal to constant variabl,   
   if is true: 
                reassign constant to str on split method attached to slice(constants) and copy from constCluster.length and then concat(constants, "ay")
   . use slice() method to remove the constant, cluster of constants by using s
    and assign it to a variable
    */
   function translatePigLatin(str) {
      let constants = str.match(/[^aeiou]+/)[0];
      let vowels;
      let constCluster = constants.length;
      return (str[0] === constants[0] )? constants = str.split("").slice(constCluster).concat(constants, "ay").join("")
       :vowels = str.concat("way");
   }

   console.log(translatePigLatin("constant"));

    console.log(translatePigLatin("california")); // returns the string aliforniacay.

    console.log(translatePigLatin("paragraphs")); // returns the string aragraphspay.

    console.log(translatePigLatin("glove")); // returns the string oveglay.

    console.log(translatePigLatin("algorithm")); // returns the string algorithmway.

    console.log(translatePigLatin("eight")); //  returns the string eightway.

    //Should handle words where the first vowel comes in the middle of the word. translatePigLatin
    console.log(translatePigLatin("schwartz")); //  returns the string artzschway.

    //Should handle words without vowels. 
    console.log(translatePigLatin("rhythm")); // returns the string rhythmay.
        