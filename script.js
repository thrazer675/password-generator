// Assignment code here
var caseArray=[];
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"]
var number=["0","1","2","3","4","5","6","7","8","9"];
var special=["!","@","#","$","%","^","&","*","(",")","_","+"];

function generatePassword() {

  var passwordString="";
  caseArray=[];
  var useLowerCase=confirm("Would you like lowercase letters?");
  var useUpperCase=confirm("What about uppercase letters?");
  var useNumber=confirm("Do you want some numbers?");
  var useSpecial=confirm("Okay, what about special characters?");

  while (useLowerCase == false && useUpperCase == false && useNumber == false && useSpecial == false) {
    window.alert("You must choose at least one of the previous options. Let's try this again.")
    useLowerCase=confirm("Would you like lowercase letters?");
    useUpperCase=confirm("What about uppercase letters?");
    useNumber=confirm("Do you want some numbers?");
    useSpecial=confirm("Okay, what about special characters? And if you said no to the first three, remember you need to at least choose this one.");
  }

  var passwordLength=parseInt(window.prompt("Choose a password length from 8 to 128."));
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    window.alert("Make sure that your selection is a number from 8 to 128.");
    passwordLength=parseInt(window.prompt("Choose a password length from 8 to 128. And try not to mess it up this time."));
  }

  if (useLowerCase==true) {
    caseArray.push(lowerCase);
  }

  if (useUpperCase==true) {
    caseArray.push(upperCase);
  }

  if (useNumber==true) {
    caseArray.push(number);
  }

  if (useSpecial==true) {
    caseArray.push(special);
  }

  for(var i=0;i<passwordLength;i++) {
    var randomCharArrayNum;
    var selectedCharArray;
    var randomCharNum;
    var randomChar;

    randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length));
    randomCharArray= parseInt(Math.floor(Math.random()*caseArray.length));
    selectedCharArray= caseArray[randomCharArrayNum];
    randomCharNum= Math.floor(Math.random()*selectedCharArray.length);
    randomChar=selectedCharArray[randomCharNum];
    passwordString+=randomChar;

  }

  return passwordString;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
