# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

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
