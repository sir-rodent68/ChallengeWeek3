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
  var passLength = random(8, 24);
  var password = "";

  for (var i = 0; i < passLength; i++) {
    var passChar = random(0, 35);

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
