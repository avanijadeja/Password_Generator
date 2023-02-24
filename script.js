// decalre variables and arrays and its values

var characterLength = 8;
var choiceArr =[];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','|','?','/','<','>',':',';','=','`','~','-','+','_','.',',','"'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword()
 {
  // call getPrompts() function. it return values true or false. and return value store in correctPrompts variables.
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  //if value is true then generatePassword function will call.otherwise when choiceArr empty then password string diplay empty.
  if(correctPrompts && choiceArr.length > 0)
  {
    var password = generatePassword();
    passwordText.value = password;
    console.value =password;
  }
  else
  {
    passwordText.value = "";
  }
}

// password generate choice from prompts and confirm function
function generatePassword()
{
  //initial password value empty.
  var password1 = "";

  //user gives number in charcterlength means how long password user want so loop is repeat from 0 to characterlength variable value.
  for(var i=0; i<characterLength; i++)
  { 
    //math floor and random funciton use to generate index .
    var randomIndex = Math.floor(Math.random() * choiceArr.length);

    //choiceArr have all values which user select from numbers,special charcter ,upper and lowercase letters.everytime its select different value from charArr array and add in password.
    password1 = password1 + choiceArr[randomIndex];
  }

  //return password
  return password1;

}

function getPrompts()
{
  //Everytime when reset choiceArr will be empty.SO new value which choice by user enter in CHoiceArr array.
  choiceArr = [];

  //prompt method used to ask user length of password. value will convert in interger with parseInt method and store in CharacterLength variable.
  characterLength = parseInt(prompt("How many characters do you want your password to be?(8 - 128 characters)"));

  //if condition check that characterlength varible value is not interger(means otherthen interger) , legth is less than 8 and greater than 128 letters then alert display msg 
  if(isNaN(characterLength) || characterLength < 8 || characterLength >128)
  {
    alert("Character Length has to be a number, 8-128 digits, Please try again.");
    return false;
  }


  //confirm method ask user for lowercase letter if they press ok button then lowercase letter use and click on cancle button lowercase letter not used.if lowercase letter use then lowerCaseArr array values concat with choiceArr array values.
  if (confirm("would you like lowercase letters in your password?"))
  { 
    var lowerCaseValid = true;
    choiceArr = choiceArr.concat(lowerCaseArr);
    
  }

  //confirm method ask user for uppercase letter if they press ok button then uppercase letter use and click on cancle button uppercase letter not used.if uppercase letter use then upperCaseArr array values concat with choiceArr array values.
  if (confirm("would you like Uppercase letters in your password?"))
  {
    var upperCaseValid = true;
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  //confirm method ask user for special characters if they press ok button then special characters use and click on cancle button special characters not used.if special characters use then special character array values concat with choiceArr array values.
  if (confirm("would you like special characters in your password?"))
  {
    var speicalCharValid = true;
    choiceArr = choiceArr.concat(specialCharArr);
  }

  //confirm method ask user for numbers if they press ok button then numbers use and click on cancle button numbers not used.if numbers use then numberArr array values concat with choiceArr array values.
  if (confirm("would you like numbers in your password?"))
  {
    var numerValid = true;
    choiceArr = choiceArr.concat(numberArr);
  }

  //if lowercase, uppercase, numbers, special charcter are not selected then alert msg will display.
  if(!lowerCaseValid && !upperCaseValid && !speicalCharValid && !numerValid)
  {
    alert("You have to choose one of the special type characters(LowerCase, UpperCase, Numbers and Special Character) for password");
  }

  return true;
}