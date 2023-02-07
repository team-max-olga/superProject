// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("superProject JS imported successfully!");
});

const showButton = document.getElementById('open-popup');
const dialog = document.getElementById('dialog-window');
const confirmBtn = dialog.querySelector('#confirmBtn');

const deleteButton = document.getElementById('deleteButton');

// "Update details" button opens the <dialog> modally
showButton.addEventListener('click', () => {
  console.log("clicked")  
  dialog.showmodal();
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});

deleteButton.addEventListener("click", () => {
  console.log("clicked")
})

// LOGIN form is working with Enter Key now
const form = document.getElementById("login-form");
const inputField = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");

inputField.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitButton.click();
  }
});

// const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

// LOGOUT button visible only for logged-in user
// const isLoggedIn = true;

// if (isLoggedIn) {
//   document.getElementById("logout-button").style.display = "block";
// }

// function getUserStatus() {
//   return fetch("/api/user/status")
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.isLoggedIn) {
//         document.getElementById("logout-button").style.display = "block";
//       }
//     })
//     .catch((error) => console.error(error));
// }

// getUserStatus();


