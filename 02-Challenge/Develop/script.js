// Assignment Code
var generateBtn = document.querySelector("#generate");

// gives a random number between to given numbers
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
