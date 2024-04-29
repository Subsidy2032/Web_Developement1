// Name: Noam Muchnik
// ID: 212472484
// Github page: https://github.com/Subsidy2032/Web_Developement1

// A function to check if all the input is valid
function validateInput() {
  // Getting the password input and calling the function to validate the password
  let pw = document.forms["signupForm"]["psw"].value;
  let pwRepeat = document.forms["signupForm"]["psw-repeat"].value;

  let passValid = validatePw(pw, pwRepeat); // Saving if there is a problem with the password

  // Getting the email input
  let email = document.forms["signupForm"]["email"].value.trim();

  let emailNotEmpty = true; // Variable to save if the email field is empty

  // Checks if the email field is empty, sets the border color the red if it is, sets it to default otherwise
  if(email === "") {
    document.getElementById("email").style.border = '1px solid red';
    emailNotEmpty = false;
  } else {
    document.getElementById("email").style.border = '';
  }
  
  return passValid && emailNotEmpty; // Returns true if the entire signup input is valid, false otherwise
}

// A function to check if the password fields are valid
function validatePw(pw, pwRepeat) {
  let pwNotEmpty = true;
  let pwRepeatNotEmpty = true;

  // Checks if the password field is empty, sets the border color the red if it is, sets it to default otherwise
  if(pw === "") {
    document.getElementById("psw").style.border = '1px solid red';
    pwNotEmpty = false;
    document.getElementById("message").innerHTML = "";
  } else {
    document.getElementById("psw").style.border = '';
  }

  // Checks if the repeat password field is empty, sets the border color the red if it is, sets it to default otherwise
  if(pwRepeat === "") {
    document.getElementById("pswRepeat").style.border = '1px solid red';
    pwRepeatNotEmpty = false;
  } else {
    document.getElementById("pswRepeat").style.border = '';
  }

  // Returns false if the password field is empty
  if(!pwNotEmpty) {
    return false;
  }

  // Returns false and sets the error message if the password and repeat password fields don't match
  if (pw !== pwRepeat) {
    document.getElementById("message").innerHTML = "Passwords must match";
    return false;
  }

  // Returns false if the password length is less then 8 characters
  else if (pw.length < 8) {
    document.getElementById("message").innerHTML = "Password must be at least 8 characters";
    return false;
  } 
  
  // Removes the error message if the password input is valid
  else {
    document.getElementById("message").innerHTML = "";
  }

  return pwRepeatNotEmpty; // Returns true if the repeat password field isn't empty, false otherwise
}