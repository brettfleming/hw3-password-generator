// Assignment Code\
const passwordElement = document.getElementById('password')
const lengthElement = document.getElementById('length')
const lowercaseElement = document.getElementById('lowercase')
const uppercaseElement = document.getElementById('uppercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const generateElement = document.getElementById('generate')


const randomfunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};

// Write password to the #password input
generateElement.addEventListener("click", () => {
  const length = +lengthElement.value;
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;
  
  passwordElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


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