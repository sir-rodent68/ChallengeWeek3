// Assignment Code
var generateBtn = document.querySelector("#generate");

// an array to assign each letter of the alphabet a number
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// gives a random number between to given numbers
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

// generates a random passord
function generatePassword() {
  var minLength = prompt("What minimum length would you like for your password?")
  var maxLength = prompt("What maximum length would you like for your password?")
  var passLength = random(minLength, maxLength);
  var password = "";
  console.clear
  for (var i = 0; i < passLength; i++) {
    var passChar = random(0, 34);
    console.log(passChar)
    if (passChar > 9) {
      passChar = passChar - 9;
      passChar = alphabet[passChar]
    }
    console.log(passChar)
    password = password + passChar;
  };

  return(password)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
