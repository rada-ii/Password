let usernameEmailForm = document.querySelector("#username-email-container");
let usernameInput = usernameEmailForm.querySelector("#username");
let emailInput = usernameEmailForm.querySelector("#email");
let passwordContainer = document.querySelector("#password-container");
let passwordForm = passwordContainer.querySelector(".password-form");
let passwordInput = passwordForm.querySelector("#password");
let body = document.querySelector("body");

//username must have only letters
//password must have only letters and at least one number
//and (@ and .)symbol in email
let usernamePattern = /^[a-zA-Z]{6,12}$/;
let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

usernameEmailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = usernameInput.value;
  let email = emailInput.value;

  if (usernamePattern.test(username) && emailPattern.test(email)) {
    usernameInput.value = "";
    emailInput.value = "";
    body.setAttribute("class", "image");
    alert("You successfully entered username and email!");
    // Hide the username and email form and show the password form
    usernameEmailForm.style.display = "none";
    passwordContainer.style.display = "flex";
    // Clearing the input fields
  } else {
    alert(
      'Please enter a valid username and email, username must have only letters and have between 6 and 12 characters! Email must contain "@"and "."!'
    );
  }
});

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let password = passwordInput.value;

  if (passwordPattern.test(password)) {
    passwordInput.value = "";
    body.setAttribute("class", "image1");
    alert("You successfully entered password!");
    passwordContainer.style.display = "none";

    let loginMessage = document.createElement("h1");
    loginMessage.innerText = "You are logged in!";
    body.appendChild(loginMessage);
    let reloadButton = document.createElement("button");
    reloadButton.innerText = "Reload";
    reloadButton.addEventListener("click", () => {
      location.reload();
    });
    body.appendChild(reloadButton);
  } else {
    passwordInput.setAttribute("class", "error");
    alert(
      "Please enter a valid password, password must have only letters and at least 1 number,and be at least 6 characters long!"
    );
  }
});

//adding borders around inputs depending if they are entering "good" username and password
usernameInput.addEventListener("keyup", (e) => {
  let username = e.target.value;
  let email = emailInput.value;

  if (usernamePattern.test(username) && emailPattern.test(email)) {
    usernameInput.setAttribute("class", "success");
    emailInput.setAttribute("class", "success");
  } else {
    usernameInput.setAttribute("class", "error");
    emailInput.setAttribute("class", "error");
  }
});

emailInput.addEventListener("keyup", (e) => {
  let username = usernameInput.value;
  let email = e.target.value;

  if (usernamePattern.test(username) && emailPattern.test(email)) {
    usernameInput.setAttribute("class", "success");
    emailInput.setAttribute("class", "success");
  } else {
    usernameInput.setAttribute("class", "error");
    emailInput.setAttribute("class", "error");
  }
});
