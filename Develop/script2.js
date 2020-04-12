// Characters
let number = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvxwyz";
let uppercase = "ABCDEFGHIJKLMONPQRSTUVXWYZ";
let specChar = "!@#$%^&*_+-=";

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", trueConditions);
      
// Function to determine how many characters
let askNumber = "";
let askLower = "";
let askUpper = "";
let askSpecChar = "";
let passLength = "";
function typeChar() {
   askNumber = confirm("Click OK if you would like NUMBERS and CANCEL if not.");
   askLower = confirm("Click OK if you would like LOWERCASE characters and CANCEL if not.");
   askUpper = confirm("Click OK if you would like UPPERCASE characters and CANCEL if not.");
   askSpecChar = confirm("Click OK if you would like SPECIAL characters and CANCEL if not.");
};
      
// If True Conditions add to Box, Else start over
function trueConditions() {
   passLength = prompt("Choose between 8 and 128 characters");
   
   if (isNaN(passLength)) {
      alert("Please enter a NUMBER and not a letter");
      return trueConditions();
   };
   
   while (passLength < 8 || passLength > 128) {
      passLength = prompt("Please, choose a number between 8 and 128 characters!");
   };
   typeChar();
   console.log(passLength);
         

   if (askNumber || askLower || askUpper || askSpecChar) {
      document.querySelector("#password").value = "";
      let sumAllChar = "";
      

      if (askNumber === true) {
         addNumber = Math.floor(Math.random() * number.length);
         sumAllChar += number;
      };
      console.log(askNumber);
      
      if (askLower === true) {
         addLower = Math.floor(Math.random() * lowercase.length);
         sumAllChar += lowercase;
      };
      console.log(askLower);
      
      if (askUpper === true) {
         addUpper = Math.floor(Math.random() * uppercase.length);
         sumAllChar += uppercase;
      };
      console.log(askUpper);
      
      if (askSpecChar === true) {
         addSpecChar = Math.floor(Math.random() * specChar.length);
         sumAllChar += specChar;
      };
      console.log(askSpecChar);
      
      writePass(sumAllChar);
      
   } else {
      alert("For your PASSWORD to be generated you need to CHOOSE at least one type of character");
      trueConditions();
   };
};


// Loop Password Generator
function generatePassword(sumAllChar) {
   let pwd = "";
   for (let i = 0; i < passLength; i++) {
      pwd += sumAllChar[(Math.floor(Math.random() * sumAllChar.length))];
   }
   return pwd;
};

// Function to print the Password on screen
function writePass(sumAllChar) {
   var password = generatePassword(sumAllChar);
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
   console.log(password);
};