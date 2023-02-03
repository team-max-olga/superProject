const router = require("express").Router();
const User = require("../models/User.model");
const Habit = require("../models/Habbit.model");
const mongoose = require("mongoose");
const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

//route GET for the HabitBoard page (1)
router.get("/profile", isLoggedIn, (req, res) => {
  User.findById(req.session.currentUser._id)
    .populate("habit")
    .then((info) => {
      res.render("profile/habitboard", info)
    })
});

//route GET for create a new habit page (2)
router.get("/profile/create-habit", (req, res) => {
  res.render("profile/create-habit");
});

let week1 = [{ name: "day-1", done: false }, { name: "day-2", done: false }, { name: "day-3", done: false }, { name: "day-4", done: false }, { name: "day-5", done: false }, { name: "day-6", done: false }, { name: "day-7", done: false }]
let week2 = [{ name: "day-8", done: false }, { name: "day-9", done: false }, { name: "day-10", done: false }, { name: "day-11", done: false }, { name: "day-12", done: false }, { name: "day-13", done: false }, { name: "day-14", done: false }]
let week3 = [{ name: "day-15", done: false }, { name: "day-16", done: false }, { name: "day-17", done: false }, { name: "day-18", done: false }, { name: "day-19", done: false }, { name: "day-20", done: false }, { name: "day-21", done: false }]

//route POST for "create a new HABIT" (3)
router.post("/profile/create-habit", (req, res) => {
  const { title, category, duration, description, author } = req.body;
  console.log(req.body)

  if ("days-7" in req.body) { Habit.create({week1Tracker:week1,  title, category, duration, description, author: req.session.currentUser._id })
  .then((habit) => {
    return User.findByIdAndUpdate(req.session.currentUser._id, { $push: { habit: habit._id } })
  })}

  else if ("days-14" in req.body) { Habit.create({week1Tracker:week1, week2Tracker:week2,  title, category, duration, description, author: req.session.currentUser._id }) 
  .then((habit) => {
    return User.findByIdAndUpdate(req.session.currentUser._id, { $push: { habit: habit._id } })
  })
  .then(() => {res.redirect("/profile")})}

  else if ("days-21" in req.body) { Habit.create({week1Tracker:week1, week2Tracker:week2, week3Tracker:week3,  title, category, duration, description, author: req.session.currentUser._id })
  .then((habit) => {
    return User.findByIdAndUpdate(req.session.currentUser._id, { $push: { habit: habit._id } })
  })
  .then(() => {
  res.redirect("/profile")})}})


//route GET for habit details page (4)
router.get("/profile/habit/:habitId", (req, res) => {
  const { habitId } = req.params;
  
  Habit.findById(habitId)
    .then((habit) => {
      res.render("profile/habit-details", habit);
    })
    .catch((error) => {
      console.log("There was an error retrieving your habit page: " + error);
    });
});

//route GET for edit habit page (5)
router.get("/profile/:habitId/edit", (req, res) => {
  const { habitId } = req.params;

  Habit.findById(habitId)
    .then((habitToEdit) => {
      res.render("profile/edit-habit", habitToEdit)
    })
    .catch((error) => {
      console.log("there was an error trying to edit your habit: " + error);
    });
});

//route POST for editing a habit (6)
router.post("/profile/:habitId/edit", (req, res) => {
  const { habitId } = req.params
  const { title, category, duration, description } = req.body

  Habit.findByIdAndUpdate(habitId, {title, category, duration, description }, { new: true })
    .then((updatedHabit) => {
      res.redirect(`/profile`)
      console.log("this are updated days: ", req.body)
    })
    .catch((error) => {
      console.log("Error occured while editing your habit: " + error)
    })
})
/* POST route not working */


//route POST for deleting a habit (7)
router.post("/profile/:habitId/delete", (req, res) => {
  const { habitId } = req.params;

  Habit.findByIdAndDelete(habitId)
    .then((deletedHabit) => {
      res.redirect("/profile")
    })
    .catch((error) => {
      console.log("Error while deleting a habit: " + error)
    })
})


module.exports = router