// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("superProject JS imported successfully!");
});

function chooseDuration() {
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

/* ========================================== */

function changeCellColor() {
  let checkbox = document.getElementById("checkbox")
  let tableCell = document.getElementById("cell")
  let button = docume.getElementById("edit-button")

  button.addEventListener("click", function() {
    if(checkbox.checked) {
      tableCell.style.backgroundColor = "green"
    }
  })
}