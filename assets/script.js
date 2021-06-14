// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz"
  return lower[Math.floor(Math.random() * 26)]
}
function randomUpper() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upper[Math.floor(Math.random() * 26)]
}
function randomNumber() {
  return Math.floor(Math.random() * 10)
}
function randomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.?"
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
