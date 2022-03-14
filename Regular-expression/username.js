/* Ristrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity
on the favorite sites. 

You need to check all the usernames in a database. Here are some simple rules that users have 
to follow when creating their username. 

Usernames can only use alpha-numeric characters.

1.  The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2.  Username cannot start with the number.
3.  Username letters can be lowercase and uppercase.
4.  Usernames have to be at least two characters long. A two character username can only use alphabet letters as characters.

change the regex userCheck to fit the constraints listed above. */

let username = 'J98000';
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d*$/gi;
console.log(username.match(userCheck));