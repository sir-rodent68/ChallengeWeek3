// Assignment Code
var generateBtn = document.querySelector("#generate");

// an array to assign each letter of the alphabet a number
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// gives a random number between to given numbers
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

// generates a random passord based on user prompts
function generatePassword() {
  var minLength = prompt("What minimum length would you like for your password?")
  var maxLength = prompt("What maximum length would you like for your password?")
  var passLength = random(minLength, maxLength);
  var password = "";

  var useLowerCase = confirm("Do you want to have lowercase letters in your password?");
  var useUpperCase = confirm("Do you want to have uppercase letters in your password?");
  var useSpecialCharacters = confirm("Do you want to have special characters in your password?");

  for (var i = 0; i < passLength; i++) {
    if (useLowerCase == true) {
      if (useUpperCase == true) {
        if (useSpecialCharacters == true) {
          var charType = random(1, 4)

          if (charType == 1) {
            var passChar = random(0, 9);
            password = password + passChar;

          } else if (charType == 2) {
            var passChar = random(0, 25);
            passChar = alphabetLower[passChar];
            password = password + passChar;

          } else if (charType == 3) {
            var passChar = random(0, 25);
            passChar = alphabetUpper[passChar];
            password = password + passChar;

          } else {
            var passChar = random(0, 32);
            passChar = specialCharacter[passChar]
            password = password + passChar

          }

        } else {

        }
      } else {
        if (useSpecialCharacter == true) {

        } else {

        }
      }
    } else {
      if (useUpperCase == true){
        if (useSpecialCharacters == true) {

        } else {

        }
      } else {
        if (useSpecialCharacter == true) {

        } else {

        }
      }
    }
    

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
