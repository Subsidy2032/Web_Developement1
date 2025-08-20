// A function to check if all the input is valid
function validateInput() {
  // Getting the password input and calling the function to validate the password
  let pw = document.forms["signupForm"]["psw"].value;
  let pwRepeat = document.forms["signupForm"]["psw-repeat"].value;
  let passValid = validatePw(pw, pwRepeat); // Saving if there is a problem with the password

  // Getting the email input and calling the function to validate the email
  let email = document.forms["signupForm"]["email"].value.trim(); // Getting the email input
  let emailValid = validateEmail(email);
  
  return passValid && emailValid; // Returns true if the entire signup input is valid, false otherwise
}

// A function to check if the password fields are valid
function validatePw(pw, pwRepeat) {
  let passValid = true; // To track if the password is valid

  // Resets the error messages and borders style
  document.getElementById("repeatPassMessage").innerHTML = "";
  document.getElementById("passMessage").innerHTML = "";
  document.getElementById("pswRepeat").style.border = '';
  document.getElementById("psw").style.border = '';

   // Checks if the repeat password field is empty, sets the border color the red if it is
   if(pwRepeat === "") {
    document.getElementById("pswRepeat").style.border = '1px solid red';
    passValid = false;
  }

  // Checks if the password field is empty, sets the border color the red if it is
  if(pw === "") {
    document.getElementById("psw").style.border = '1px solid red';
    return false;
  }

  // Adds a message next to the repeat password field if the password and repeat password fields don't match
  if (pw !== pwRepeat) {
    document.getElementById("repeatPassMessage").innerHTML = "Passwords must match";
    passValid = false;
  }

  // Adds a message next to the password field if the password length is less then 8 characters
  if (pw.length < 8) {
    document.getElementById("passMessage").innerHTML = "Password must be at least 8 characters";
    passValid = false;
  }

  // Returns false if the password input is invalid
  if(!passValid) {
    return false;
  }

  // Returns true if the password input is valid
  else {
    return true;
  }
}

function validateEmail(email) {
  document.getElementById("email").style.border = ''; // Resets the border style

  // Checks if the email field is empty, sets the border color to red if it is
  if(email === "") {
    document.getElementById("email").style.border = '1px solid red';
    return false; // Return false if the email field is empty
  }

  return true; // Returns true if the email field isn't empty
}