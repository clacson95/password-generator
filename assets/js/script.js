
// Password values
// Special characters
const special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
"-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", 
"`", "{", "|", "}", "~"];

// Numeric characters
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// UpperCase Alphabetical characters
const alphabetCaps = alphabet.map(function (letter) {
  return letter.toUpperCase();
});

// Variables
var passLength;
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Generate password
function generatePassword() {

  // Prompt user input
  passLength = parseInt(prompt("How many characters would you like\
  your password to have? Please enter a value between 8 and 128."));

  if (passLength == null) {
    alert("Please enter a value");
  } else if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("You must enter a value between 8 and 128"));
  } else {
    
  }



 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);