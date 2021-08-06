// Assignment Code\
const passwordElement = document.getElementById('password')
const generateElement = document.getElementById('generate')






// password criteria elements
const lengthElement = document.getElementById('length')
const lowercaseElement = document.getElementById('lowercase')
const uppercaseElement = document.getElementById('uppercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')



const randomfunction = {
  lowercase: randomLower,
  uppercase: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};

function generatePassword(lowercase, uppercase, number, symbol, length) {
  let generatedPassword = '';
  // need to count the types being selected
  const Count = lowercase + uppercase + number + symbol;
  // then we need to filter out the ones coming back as false
  const typesArr = [ {lowercase }, { uppercase }, { number }, { symbol } ].filter(item => Object.values(item)[0]);
  
  if (Count === 0) {
    return '';
  }
  for (let i = 0; i < length; i += Count) {
    typesArr.forEach(type => {
      const function1 = Object.keys(type)[0];
      
      generatedPassword += randomfunction[function1]();
    });
  }
  //if length isnt diviable by types counted evenly the password with be returned too long this line cuts it down to the length
  var password = generatedPassword.slice(0, length); 
  return password;
}

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
  const symbols = "!@#$%^&*(){}[]?"
  return symbols[Math.floor(Math.random() * symbols.length)]
}



generateElement.addEventListener("click", function() {
  let length = lengthElement.value;
  const lowerCaseSelected = lowercaseElement.checked;
  const symbolsSelected = symbolsElement.checked;
  const upperCaseSelected = uppercaseElement.checked;
  const numbersSelected = numbersElement.checked;
  
  if (length < 8 || length > 128) {
    length = prompt("please enter a valid length.")
  };
  
    passwordElement.innerText = generatePassword(lowerCaseSelected, upperCaseSelected, numbersSelected, symbolsSelected, length);
});
