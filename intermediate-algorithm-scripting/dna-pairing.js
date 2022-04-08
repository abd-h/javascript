/*  DNA Pairing
    the DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 3d array. 
    
    Base pairs are a pair of  AT and CG. Match the missing elements to the provided character.
    
    Return the provided character as the first element in each array.
    
    For example, for the input GCG, return [[G, C], [C, G], [G, C]] 
    
    The character and its pair are paired up in an array,  and all the arrays are grouped into one encapsulating array
    
    The plan:
    1. Declare a variable and assign an empty array.
    2. Declare a variable for a, t, c and g
    3. Use if statement to meet the condition if a 

    */


    function pairElement(str) {
        let a = ["A", "T"],
            c = ["C", "G"],
            g = ["G", "C"],
            t = ["T", "A"];
            newStr = str.split("").slice();
        
        return newStr.reduce((total, element, index, array) => {
            if(element === "A") {
                total.push(a);
            } else if(element === "C") {
                total.push(c);
            } else if(element === "G") {
                total.push(g);
            } else {
                total.push(t)
            }
            return total;
        }, []); 
    }
    console.log(pairElement("GCG"));

    console.log(pairElement("ATCGA")); //  returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

    console.log(pairElement("TTGAG")); //  returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

    console.log(pairElement("CTCTA")); //  returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].