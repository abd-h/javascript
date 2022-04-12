/*  Convert HTML Enteties
    Convert the characters &, <, >, "(double)", and '(apostrophe), in a string to their 
    corroesponding HTML entities 
    
    1. Declare new variable called newStr and assign copy of  str*/


    function convertHTML(str) {
        // let newStr = str.split(" ").slice();
        // return newStr.reduce((result, element, index, array) => {
        //     if(element == "&") {
        //         result = array.join(" ").replace(/&/, "&amp;")
        //     } else if(element == "<") {
        //         result = array.join(" ").replace(/</g, "&lt;")
        //     } else if(element == ">") {
        //         result = array.join(" ").replace(/>/, "&gt;")
        //     } else if(element.match(/"/)) {
        //         result = array.join(" ").replace(/"/g, "&quot;")
        //     } else if(element.match(/'/)) {
        //         result = array.join(" ").replace(/'/, "&apos;")
        //     } else if(element.match(/<>/)) {
        //         result = array.join(" ").replace(/<>/, "&lt;&gt;")
        //     } else if(array.join(" ") == element.match(/[a-z]+/)) {
        //         result = array.join(" ")
        //     }
        //     return result
        // }, "");


        let newStr = str.split(" ").slice();
        return newStr.reduce((result, element, index, array) => {
            (element == "&")? result = array.join(" ").replace(/&/, "&amp;")
            :(element == "<")? result = array.join(" ").replace(/</g, "&lt;")
            :(element == ">")? result = array.join(" ").replace(/>/, "&gt;")
            :(element.match(/"/))? result = array.join(" ").replace(/"/g, "&quot;")
            :(element.match(/'/))? result = array.join(" ").replace(/'/, "&apos;")
            :(element.match(/<>/))? result = array.join(" ").replace(/<>/, "&lt;&gt;")
            :(array.join(" ") == element.match(/[a-z]+/))? result = array.join(" ")
            :null;
            return result
        }, "");



    }
    console.log(convertHTML("Dolce $ Gabbana"))

    console.log(convertHTML("Dolce & Gabbana")); //  returns the string Dolce &amp; Gabbana.

    console.log(convertHTML("Hamburgers < Pizza < Tacos")); //  returns the string Hamburgers &lt; Pizza &lt; Tacos.

    console.log(convertHTML("Sixty > twelve")); //  returns the string Sixty &gt; twelve.

    console.log(convertHTML('Stuff in "quotation marks"')); // returns the string Stuff in &quot;quotation marks&quot;.

    console.log(convertHTML("Schindler's List")); //  returns the string Schindler&apos;s List.

    console.log(convertHTML("<>")); //  returns the string &lt;&gt;.

    console.log(convertHTML("abc")); //  returns the string abc.