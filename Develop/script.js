// Assignment Code
const generateBtn = document.querySelector("#generate");
// i created an array of special characters to choose from to generate the password.
const specialchars = ['@','%','+','','/',"'",'!','#','$)']
// i created an array of numbers to chose from to generate the password.
const numberchars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// i created an array of lowercased characters to choose from to generate the password.
const lowercasedchars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
// i created an array of uppercased characters to choose from to generate the password.
const uppercasedchars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
// Created a function for getting the users input.
Passwordlength = prompt("How many characters in your password? Choose between 8 to 128 characters.");
  if (Passwordlength < 8 || Passwordlength > 128) {
    return "Generated password";
  }
  
  specialchars = confirm ("Do you want to include special characters?");
  numberchars = confirm ("Do you want to include numbers?");
  lowercasedchars = confirm ("Do you want to include lowercase charcters?");
  uppercasedchars = confirm ("Do you want to include uppercase characters?");

  // Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
