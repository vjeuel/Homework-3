// Characters
let number = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvxwyz";
let uppercase = "ABCDEFGHIJKLMONPQRSTUVXWYZ";
let specChar = "!@#$%^&*_+-=";
let allChar = number + lowercase + uppercase + specChar;

// Empties variables to be filled with Data
let choseLen = "";
let addNumber = "";
let addLower = "";
let addUpper = "";
let addSpcChar = "";

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  // Questions (I'm not sure that I have to console.log all the answers but it is nice to see them printing in the console)
  choseLen = prompt("Choose between 8 and 128 characters");
  while (choseLen < 8 || choseLen > 128) {
    choseLen = prompt("Please, choose a number between 8 and 128 characters!")
  }
  
  addNumber = confirm("Click OK if you would like NUMBERS and CANCEL if not.");
  addLower = confirm("Click OK if you would like LOWERCASE characters and CANCEL if not.");
  addUpper = confirm("Click OK if you would like UPPERCASE characters and CANCEL if not.");
  addSpcChar = confirm("Click OK if you would like SPECIAL characters and CANCEL if not.");
  
  let allFalse = addNumber === false && addLower === false && addUpper === false && addSpcChar === false;
  if (choseLen = allFalse) {
    alert("You need to pick at least one type of character");
    writePassword();
  }
};
writePassword();

console.log("Chosen length: " + choseLen)
console.log("OK for NUMBERS: " + addNumber);
console.log("OK for LOWERCASE: " + addLower);
console.log("OK for UPPERCASE: " + addUpper);
console.log("OK for SPECIAL characters: " + addSpcChar);



function password(length) {
  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }
  return pwd;
}

console.log(password(10, length));

if (number === true) {
  addUpper = Math.floor(uppercase.length * Math.random())
}

// Write password to the #password input
function writePass() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// console.log(password(10, length));
console.log(writePassword);
console.log(writePass);


// console.log(allChar);
// console.log(password);

// function writePassword() {
  
// }



// writePassword.value = password(allChar.value, allChar);






// Assignment Code
// let generateBtn = document.querySelector("#generate");



// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);


// writePassword.value = password(allChar.value, allChar);


















// let allCharArray = [number += lowercase += uppercase += specChar];
// console.log(allCharArray);


// let allCharObj = {
  //     low: "abcdefghijklmnopqrstuvwxyz",
  //     upper: "ABCDEFGHIJKLMNOPQRSTUVXWYZ",
  //     num: "1234567890",
  //     spCh: "!@#$%^&*_+-="
  // };
  
  // console.log(allCharObj);
  
  
  // let passAll = "0123456789abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMONPQRSTUVXWYZ`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
  
  
// function passLength(length) {
  //   let result = '';
  //   let passCharNumber = passNumber.length;
  //   let passCharLower = passLower.length;
  //   let passCharUpper = passUpper.length;
  //   let passCharSpec = passSpec.length;
  
  //   let passCharAll = passAll.length;
  
  
  //   for (let i = 0; i < length; i++){
    //     result += passAll.charAt(Math.floor(Math.random() * passCharAll));
    //       // + passLower.charAt(Math.floor(Math.random() * passCharLower))
    //       // + passUpper.charAt(Math.floor(Math.random() * passCharUpper))
    //       // + passSpec.charAt(Math.floor(Math.random() * passCharSpec));
    //   }
    //   return result;
    // }
    
    // console.log(passLength(16));
    
    // function passLength(length) {
      //   let passCharNLUS = combNLUS.length;
      //   for (let i = 0; i < length; i++) {
        //     result += combNLUS.charAt(Math.floor(Math.random() * passCharNLUS));
        //   }
        //   return result;
        // }
        // Did you get the invitation on Slack for the Zoom meeting?
        
        
        
        // console.log(passLength(chosenNumber));
        
        // var chosenNumber = 
        
        
        
              
              
              
              // Eddie's Code
              // var charPassword = prompt("How many characters do you want in your password?");
              //   if (charPassword < 8) {
                //     alert("Password is not long enough!");
                //   } else if (charPassword > 128) {
                  //     alert("Password is to long!");
                  //   } else {
                    //     alert("Great!");
                    //   }

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    // let combNLUS = "0123456789abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMONPQRSTUVXWYZ`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
                    // let combNLU = "0123456789abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMONPQRSTUVXWYZ"
                    // let combNLS = "0123456789abcdefghijklmnopqrstuvxwyz`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
                    // let combNUS = "0123456789ABCDEFGHIJKLMONPQRSTUVXWYZ`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
                    // let combLUS = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMONPQRSTUVXWYZ`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
                    // let combNL = "0123456789abcdefghijklmnopqrstuvxwyz"
                    // let combNU = "0123456789ABCDEFGHIJKLMONPQRSTUVXWYZ"
                    // let combNS = "0123456789`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
                    // let combLU = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMONPQRSTUVXWYZ"
                    // let combLS = "abcdefghijklmnopqrstuvxwyz`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
                    // let combUS = "ABCDEFGHIJKLMONPQRSTUVXWYZ`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"
                    // let combN = "0123456789"
                    // let combL = "abcdefghijklmnopqrstuvxwyz"
                    // let combU = "ABCDEFGHIJKLMONPQRSTUVXWYZ"
                    // let combS = "`~!@#$%%^&*_+-=,./<>?;':\|()[]{}"