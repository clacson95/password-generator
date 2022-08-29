
// Password values
// Special characters
const special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
"-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", 
"`", "{", "|", "}", "~"];

// Numeric characters
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
const LowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// UpperCase Alphabetical characters
const UpCase = alphabet.map(function (letter) {
  return letter.toUpperCase();
});

// Variables
var passLength;
var confirmSpecial;
var confirmNumber;
var confirmLowCase;
var confirmUpCase;
var criteria;
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

  // if statement >>> password specification
  if (passLength == null) {
    alert("Please enter a value.");
  } else if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("You must enter a value between 8 and 128"));
  } else {
    
    confirmSpecial = confirm("Would you like to include special characters?");
    confirmNumber = confirm("Would you like to include numbers?");
    confirmLowCase = confirm("Would you like to include lowercase characters?");
    confirmUpCase = confirm("Would you like to include upppercase characters?");
  }

  // if statement >>> criteria specification
  // if the user didn't choose any criteria, give an alert
  if (!confirmSpecial && !confirmNumber && !confirmLowCase && !confirmUpCase) {
    criteria = alert("Please choose at least 1 criteria.");
  // if the user chose all 4 criteria
  } else if (confirmSpecial && confirmNumber && confirmLowCase && confirmUpCase) {
    criteria = special.concat(number, LowCase, UpCase);
  // if the user chose 3 criteria
  } else if (confirmSpecial && confirmNumber && confirmLowCase) {
    criteria = special.concat(number, LowCase);
  } else if (confirmSpecial && confirmNumber && confirmUpCase) {
    criteria = special.concat(number, UpCase);
  } else if (confirmSpecial && confirmLowCase && confirmUpCase) {
    criteria = special.concat(LowCase, UpCase);
  } else if (confirmNumber && confirmLowCase && confirmUpCase) {
    criteria = number.concat(LowCase, UpCase);
  // if the user chose 2 criteria
  } else if (confirmSpecial && confirmNumber) {
    criteria = special.concat(number);
  } else if (confirmSpecial && confirmLowCase) {
    criteria = special.concat(LowCase);
  } else if (confirmSpecial && confirmUpCase) {
    criteria = special.concat(UpCase);
  } else if (confirmNumber && confirmLowCase) {
    criteria = number.concat(LowCase);
  } else if (confirmNumber && confirmUpCase) {
    criteria = number.concat(UpCase);
  } else if (confirmLowCase && confirmUpCase) {
    criteria = LowCase.concat(UpCase);
  // if the user chose 1 criteria
  } else if (confirmSpecial) {
    criteria = special;
  } else if (confirmNumber) {
    criteria = number;
  } else if (confirmLowCase) {
    criteria = LowCase;
  } else if (confirmUpCase) {
    criteria = UpCase;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);