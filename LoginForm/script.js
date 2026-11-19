let form = document.getElementById("loginform");
let email = document.getElementById("email");
let password = document.getElementById("password");
let msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!email.value.includes("@")) {
    msg.className = "error";
    msg.innerText = "Invalid Email! @ is required";
  } else if (password.value.length < 6) {
    msg.className = "error";
    msg.innerText = "Password must be atleast 6 charecters";
  } else {
    msg.className = "success";
    msg.innerText = "Login Successful";
  }
});
