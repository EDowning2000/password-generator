//array's with numbers, letters, and symbols
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbols = ['!','@','#','$','%','&','-','?'];
var generateBtn = document.querySelector('#generate');
var newPasswordFinal = []
var userConditions = []
var newPasswordRandom = []
// var newPasswordFinal =[]

function generatePassword(){

//Math functions to find random characters


// Assignment Code with prompts and confirms 
var generateBtn = document.querySelector("#generate");
var lengthPrompt= parseInt ( prompt ('How many Characters long do you want the password to be?'));
var symbolsConfirm = confirm('Add symbols in your password?');
var numbersConfirm = confirm('Add numbers in your password?');
var uppercaseConfirm = confirm('Add uppercase letters in your password?');
var lowercaseConfirm = confirm('Add lowercase letters in your password?')



//console logs testing out variables and prompts
// console.log(randomLowercase)
// console.log(randomSymbols)
// console.log(lengthPrompt)
// console.log(randomUppercase)
// console.log(randomNumbers)
// console.log(symbolsConfirm)
// console.log(numbersConfirm)
// console.log(uppercaseConfirm)
// console.log(lowercaseConfirm)
// console.log(userConditions)

if(numbersConfirm){
  userConditions=userConditions.concat(numbers)
}
if(uppercaseConfirm){
  userConditions=userConditions.concat(uppercase)
}
if(lowercaseConfirm){
  userConditions=userConditions.concat(lowercase)
}
if(symbolsConfirm){
  userConditions=userConditions.concat(symbols)
}
console.log(userConditions)

for (var i=0; i < lengthPrompt; i++){
  newPasswordRandom = userConditions[Math.floor(Math.random() * userConditions.length)]
  console.log(newPasswordRandom);
  
  newPasswordFinal.push(newPasswordRandom)
}

return newPasswordFinal.join('')

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER