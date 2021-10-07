//Global Variables

//Function to validate HTML form
function validateForm() {
  var a = document.forms["myForm"]["fname"].value;
  var b = document.forms["myForm"]["lname"].value;
  var c = document.forms["myForm"]["email"].value;
  var d = document.forms["myForm"]["textarea"].value;
  if (a == "") {
    alert("We need your name");
    return false;
  } else if (b == "") {
    alert("We need your last name");
    return false;
  } else if (validateEmail(c) == false) {
    alert("This email is not a valid");
    return false;
  } else if (d == "") {
    alert("Text cannot be empty!");
    return false;
  } else {
    alert("Thank for your feedback!");
  }
}

//Validate email helper function
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateNews() {
  var c = document.forms["newsForm"]["email"].value;
  if (validateEmail(c) == false) {
    alert("This email is not a valid");
    return false;
  } else {
    alert("Check your email to confirm!");
  }
}
