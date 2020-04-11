// Characters
let number = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvxwyz";
let uppercase = "ABCDEFGHIJKLMONPQRSTUVXWYZ";
let specChar = "!@#$%^&*_+-=";

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", Length);

// Function to determine how many characters
function Length() {
   let passLength = "";
   passLength = prompt("Choose between 8 and 128 characters");
   while (passLength < 8 || passLength > 128) {
      passLength = prompt("Please, choose a number between 8 and 128 characters!");
   };
   typeChar();
};

// Function to determine how many characters
function typeChar() {
   let askNumber = "";
   let askLower = "";
   let askUpper = "";
   let askSpecChar = "";
   askNumber = confirm("Click OK if you would like NUMBERS and CANCEL if not.");
   askLower = confirm("Click OK if you would like LOWERCASE characters and CANCEL if not.");
   askUpper = confirm("Click OK if you would like UPPERCASE characters and CANCEL if not.");
   askSpecChar = confirm("Click OK if you would like SPECIAL characters and CANCEL if not.");
   console.log(askNumber);
   console.log(askLower);
   console.log(askUpper);
   console.log(askSpecChar);
};

// Function to print the Password on screen
function writePass(sumAllChar) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// Maybe I need to use a IF IF here
   

// If True Conditions add to Box, Else start over
function trueConditions() {
   let sumAllChar = "";
   if (askNumber === true) {
      addNumber = Math.floor(Math.random() * number.length);
      sumAllChar += number.charAt(addNumber);
   };
  
   if (askLower === true) {
      addLower = Math.floor(Math.random() * lowercase.length);
      sumAllChar += lowercase.charAt(addLower);
   };

   if (askUpper === true) {
      addUpper = Math.floor(Math.random() * uppercase.length);
      sumAllChar += uppercase.charAt(addUpper);
   };
   if (askSpecChar === true) {
      addSpecChar = Math.floor(Math.random() * specChar.length);
      sumAllChar += specChar.charAt(addSpecChar);
   };
   writePass(sumAllChar);

   let allFalse = askNumber === false && askLower === false && askUpper === false && askSpecChar === false;
   if (allFalse) {
      alert("For your PASSWORD to be generated you need to CHOOSE at least one type of character");
   };
};



//    else {
//       alert("For your PASSWORD to be generated you need to CHOOSE at least one type of character");
//    };
// };


// No false Statement


// // Function in case none of the characters are chosen it loops back and starts over 
// function noneChosen() {
//    let noneChosen = askNumber === false && askLower === false && askUpper === false && askSpcChar === false;
//    if (noneChosen) {
//       alert("You need to pick at least one type of character");
//       passLength();
//    };
// };
// passLength();
