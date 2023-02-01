// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("superProject JS imported successfully!");
});

//console.log(req.session.currentUser)

function chooseCategory() {
  console.log("in chosoe category")
let health = document.getElementById("categoryhealth").checked
let sport = document.getElementById("categorysport").checked
let routine = document.getElementById("categoryroutine").checked
let work = document.getElementById("categorywork").checked
let art = document.getElementById("categoryart").checked

let healthImage = document.getElementById("health-image")
let sportImage = document.getElementById("sport-image")
let routineImage = document.getElementById("routine-image")
let workImage = document.getElementById("work-image")
let artImage = document.getElementById("art-image")

console.log(healthImage)

if(health) {
  console.log("Health it is")
  healthImage.style.display = "inline-block"
  sportImage.style.display = "none"
  workImage.style.display = "none"
  routineImage.style.display = "none"
  artImage.style.display = "none"
} else if (sport) {
  console.log("sport it is")
  sportImage.style.display = "inline-block"
  healthImage.style.display = "none"
  workImage.style.display = "none"
  routineImage.style.display = "none"
  artImage.style.display = "none"
} else if (routine) {
  console.log("daily routine it is ")
  routineImage.style.display = "inline-block"
  healthImage.style.display = "none"
  sportImage.style.display = "none"
  workImage.style.display = "none"
  artImage.style.display = "none"
} else if (work) {
  console.log("work it is!")
  workImage.style.display = "inline-block"
  healthImage.style.display = "none"
  sportImage.style.display = "none"
  routineImage.style.display = "none"
  artImage.style.display = "none"

} else if (art) {
  artImage.style.display = "inline-block"
  healthImage.style.display = "none"
  sportImage.style.display = "none"
  routineImage.style.display = "none"
  workImage.style.display = "none"
  }
}

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

// Omar's attempt to see if it works
/* let healthImage = document.getElementById("health-image")
console.log(healthImage)
if((healthImage.className="health-category") && (healthImage.className="health")) {
  setTimeout(() => {
    console.log("Health it is")
    healthImage.style.display = "inline-block"
    sportImage.style.display = "none"
    workImage.style.display = "none"
    routineImage.style.display = "none"
    artImage.style.display = "none"
  }, 
  5000);
} */


/* 
if(health.class="health-category" && health.class="health") {

}
*/