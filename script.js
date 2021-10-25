var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCase = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var choices;

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var password = [];
  var length = prompt("Choose password length between 8 and 128 characters");

  while (length<8 || length>128 || length===null || isNaN(length)===true ){
    alert("You must choose a number between 8 and 128");
    var length = prompt("Choose password length between 8 and 128 characters");
  }

  var askNumbers = confirm("Do you want your password to include numbers?");
  var askLowerCase = confirm("Do you want your password to include lower case letters?");
  var askUpperCase = confirm("Do you want your password to include upper case letters?");
  var askSpecial = confirm("Do you want your password to include special characters?");

  while((askNumbers===false)&&(askLowerCase===false)&&(askSpecial===false)&&(askUpperCase===false)){
    alert("You must choose at least one type.");
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
  }

  var answers = {
    length: length,
    askNumbers: askNumbers,
    askLowerCase: askLowerCase,
    askUpperCase: askUpperCase,
    askSpecial: askSpecial
  }
  // 4 positives
  if((askNumbers===true)&&(askLowerCase===true)&&(askSpecial===true)&&(askUpperCase===true)){
    choices = specialCase.concat(numbers, upperCase, lowerCase);
  }

  // 3 positives 
  else if ((askNumbers===true)&&(askLowerCase===true)&&(askSpecial===true)){
    choices = specialCase.concat(numbers, lowerCase);
  }
  else if ((askNumbers===true)&&(askUpperCase===true)&&(askSpecial===true)){
    choices = specialCase.concat(numbers, upperCase);
  }
  else if ((askNumbers===true)&&(askLowerCase===true)&&(askUpperCase===true)){
    choices = numbers.concat(lowerCase, upperCase);
  }
  else if ((askLowerCase===true)&&(askUpperCase===true)&&(askSpecial===true)){
    choices = specialCase.concat(upperCase,lowerCase);
  }

  // 2 positives 

  else if ((askSpecial===true)&&(askNumbers===true)) {
    choices = specialCase.concat(numbers);

  } else if ((askSpecial===true)&&(askLowerCase===true)) {
    choices = specialCase.concat(lowerCase);

  } else if ((askSpecial===true)&&(askUpperCase===true)) {
    choices = specialCase.concat(upperCase);

  } else if ((askLowerCase===true)&&(askNumbers===true)) {
    choices = numbers.concat(lowerCase);

  } else if ((askLowerCase===true)&&(askUpperCase===true)) {
    choices = lowerCase.concat(upperCase);

  } else if ((askNumbers===true)&&(askUpperCase===true)) {
    choices = numbers.concat(upperCase);
  } 
 
  // 1 positive 

  else if (askSpecial===true) {
    choices = specialCase;
  } else if (askNumbers===true) {
      choices = numbers;
  } else if (askLowerCase===true) {
      choices = lowerCase;
  } else if (askUpperCase===true) {
      choices = upperCase;
  }
 
  for (var i = 0; i < length; i++) {
      var options = choices[Math.floor(Math.random() * choices.length)];
      password.push(options);
  }

  var pass = password.join("");
  return pass;

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


