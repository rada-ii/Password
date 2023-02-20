// let username = document.querySelector("#username");

let form = document.querySelector(".password-form");
let usernameInput = form.querySelector("#username");
let emailInput = form.querySelector("#email");
let body = document.querySelector("body");

let usernamePattern = /^[a-zA-Z]{6,12}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = usernameInput.value;
  let email = emailInput.value;

  if (usernamePattern.test(username) && emailPattern.test(email)) {
    alert("You successfully entered username and email");
    body.setAttribute("class", "image");
  } else {
    alert("Please enter a valid username and email");
  }
});

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
