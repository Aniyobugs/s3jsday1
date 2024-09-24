var user = document.getElementById("user");
var pass = document.getElementById("pass");
var btn = document.getElementById("btn");
var error = document.getElementById("error");
function validate() {
  if (user.value.trim() == "" || pass.value.trim() == "") {
    alert("Field Cannot Be empty");
    return false;
  } else if (pass.value.length < 5) {
    // alert("Password Should Be Greater Than 5")
    pass.style.border = "2px solid red";
    error.textContent = "Password Should Be Greater Than 5";
    return false;
  } else {
    pass.style.border = "2px solid green";
    return true;
  }
}
