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
  while (true) {
    var minLength = prompt("What minimum length would you like for your password?")
    if (minLength < 8){
      alert("Please select a number over 8.");
    } else {
      break;
    };
  }
  
  while (true) {
    var maxLength = prompt("What maximum length would you like for your password?")
    if (maxLength > 128) {
      alert("Please select a number under 128.");
    } else {
      break;
    };
  }
  
  var passLength = random(minLength, maxLength);
  var password = "";
  while (true) {
    var useNumber = confirm("Do you want to have numbers in your password?");
    var useLowerCase = confirm("Do you want to have lowercase letters in your password?");
    var useUpperCase = confirm("Do you want to have uppercase letters in your password?");
    var useSpecialCharacter = confirm("Do you want to have special characters in your password?");

    if (useNumber != true && useLowerCase != true && useUpperCase != true && useSpecialCharacter != true){
      alert("Please select at least one character type.")
    } else {
      break;
    }

  }

  for (var i = 0; i < passLength; i++) {
      
  while (true) {
    var charType = random(1, 4);

      if (charType == 1 && useNumber == true) {
        var insert = random(0, 9);
        password = password + insert;
        break;

      } else if (charType == 2 && useLowerCase == true) {
        var insert = random(0, 25);
        password = password + alphabetLower[insert];
        break;

      } else if (charType == 3 && useUpperCase == true) {
        var insert = random(0, 25);
        password = password + alphabetUpper[insert];
        break;

      } else if (charType == 4 && useSpecialCharacter ==true) {
        var insert = random(0, 32);
        password = password + specialCharacter[insert];
        break;
        
      };

  };
    
    

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
