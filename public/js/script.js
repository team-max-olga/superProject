// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("superProject JS imported successfully!");
});

const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// "Update details" button opens the <dialog> modally
showButton.addEventListener('click', () => {
    favDialog.showModal();
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', () => {
  outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});

/* function chooseDuration() {
  let days7 = document.getElementById("duration7days").checked
  let days14 = document.getElementById("duration14days").checked
  let days21 = document.getElementById("duration21days").checked

  let week1 = document.getElementById("week1")
  let week2 = document.getElementById("week2")
  let week3 = document.getElementById("week3")

  if(days7) {
    console.log("7 days it is")
    week1.style.display = "inline-block"
    week2.style.display = "none"
    week3.style.display = "none"
  } else if (days14) {
    console.log("14 days it is")
    week1.style.display = "inline-block"
    week2.style.display = "inline-block"
    week3.style.display = "none"
  } else if (days21) {
    console.log("21 days it is!")
    week1.style.display = "inline-block"
    week2.style.display = "inline-block"
    week3.style.display = "inline-block"
  }
}

function changeCellColor() {
  let checkbox = document.getElementById("checkbox")
  let tableCell = document.getElementById("cell")
  let button = docume.getElementById("edit-button")

  button.addEventListener("click", function() {
    if(checkbox.checked) {
      tableCell.style.backgroundColor = "green"
    }
  })
} */