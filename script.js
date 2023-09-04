// email regular expression check
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const phone_number = document.querySelector("#phone_number");
const form = document.querySelector(".form");

submit.addEventListener("click", validator);

function validator() {
  clearMessage();
  if (
    (
      password ||
      confirm_password ||
      email ||
      first_name ||
      last_name ||
      phone_number
    ).value == ""
  ) {
    errorHandler("empty_fields");
    return;
  } else if (emailRegex.test(email.value) == false) {
    errorHandler("wrong_email");
    return;
  } else if (password.value.length < 8) {
    errorHandler("weak_password");
    return;
  } else if (password.value != confirm_password.value) {
    errorHandler("password_unmatch");
    return;
  } else success();
}

function errorHandler(error) {
  switch (error) {
    case "weak_password":
      password.classList.add("error-highlight");
      confirm_password.classList.add("error-highlight");
      errorMessage("please create password longer than 8 characters.");
      break;
    case "password_unmatch":
      password.classList.add("error-highlight");
      confirm_password.classList.add("error-highlight");
      errorMessage("passwords do not match.");
      break;
    case "wrong_email":
      email.classList.add("error-highlight");
      errorMessage("please enter correct email.");
      break;
    case "empty_fields":
      if (password.value == "") password.classList.add("error-highlight");
      if (confirm_password.value == "")
        confirm_password.classList.add("error-highlight");
      if (email.value == "") email.classList.add("error-highlight");
      if (first_name.value == "") first_name.classList.add("error-highlight");
      if (last_name.value == "") last_name.classList.add("error-highlight");
      if (phone_number.value == "")
        phone_number.classList.add("error-highlight");
      errorMessage("please fill up all the required fields.");
      break;
  }
}

function errorMessage(message) {
  const errorMsg = document.createElement("p");
  errorMsg.className = "error-text";
  errorMsg.textContent = message;
  form.appendChild(errorMsg);
}

function clearMessage() {
  const errors = document.querySelectorAll(".error-text");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
  email.classList.remove("error-highlight");
  phone_number.classList.remove("error-highlight");
  last_name.classList.remove("error-highlight");
  first_name.classList.remove("error-highlight");
  password.classList.remove("error-highlight");
  confirm_password.classList.remove("error-highlight");
}

function success() {
  const successMsg = document.createElement("p");
  successMsg.className = "success-text";
  successMsg.textContent = "Account created succesfully!";
  form.appendChild(successMsg);
}
