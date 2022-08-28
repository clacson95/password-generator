//---------------
//password values
//---------------

// special characters
special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
"-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", 
"`", "{", "|", "}", "~"];

// numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// prompt

let myCharacters = prompt("How many characters would you like your password to have?")





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
