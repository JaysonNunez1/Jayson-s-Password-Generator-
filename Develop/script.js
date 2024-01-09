
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

const possiblechars = [];
// created a const for getting the users input
const Passwordlength = prompt("How many characters do you want in your password? Choose between 8 to 128 characters.");
  if (Passwordlength < 8 || Passwordlength > 128) {
    return "Generated password";
  }
  //validating
  hasSpecialchars = confirm ("Do you want to include special characters?");
  if (hasSpecialchars){
    alert ("Your password will have special characters.");
  }
  else {
    alert ("Your password will not have special characters.");
  }
  hasNumberchars = confirm ("Do you want to include numbers?");
  if (hasNumberchars){
    alert ("Your password will have numbers.");
  }
  else {
    alert ("Your password will not have numbers");
  }
  hasLowercasedchars = confirm ("Do you want to include lowercase charcters?");
  if (hasLowercasedchars){
    alert ("Your password will have lowercase characters.");
  }
  else {
    alert ("Your Password will not have lowercased characters.");
  }
  hasUppercasedchars = confirm ("Do you want to include uppercase characters?");
  if (hasUppercasedchars){
    alert ("Your password will have uppercased characters")
  }
  else {
    alert ("Your password will not have uppercased characters");
  }
  
  if (specialchars === false && numberchars === false && lowercasedchars === false & uppercasedchars === false){
    return "Please select at least one character";
  };
 //random picker 
let FinalPassword = ""
for (let i= 0; i < Passwordlength; i++) {
  let rng = [Math.floor(Math.random()* possiblechars)];
return FinalPassword;
}; 
  // Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
