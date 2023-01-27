const router = require('express').Router()
const User = require('../models/User.model')
const Habit = require("../models/Habbit.model")
const mongoose = require('mongoose')

//route GET for the HabitBoard page (1)
router.get("/profile", (req,res) => {
    Habit.find()
        .then((habit, user) => {
            console.log("Welcome! This is your Habit Board.")
            res.render("profile/habitboard", {habit, user})
        })
})

//route GET for create a new habit page (2)
router.get("/profile/create-habit", (req,res) => {
        res.render("profile/create-habit")
        console.log("Create a new habit here")
})

//route POST for "create a new HABIT" (3)
router.post("/profile/create-habit", (req,res) => {
    const {title, category, duration, description, author} = req.body

    Habit.create({title, category, duration, description, author})
        .then((habit) => {
            console.log("new habit was created: " + habit)
            return User.findByIdAndUpdate(author, {$push: {habit: habit._id}})
        })
        .then(() => res.redirect("/profile"))
        .catch((error) => {
            console.log("It seems there is an error during creating a new habit: " + error)
            res.render
        })
})

//POST with ID goes up
//route GET for habit details page (4)
router.get("/profile/habit/:habitId", (req,res) => {
    const { habitId } = req.params

    Habit.findById(habitId)
    .then((habit) => {
        console.log("This is your habit: " + habit)
        res.render("profile/habit-details", habit)
    })
    .catch((error) => {
        console.log("There was an error retrieving your habit page: " + error)
    })
})

//route GET for edit habit page (5)
router.get("/profile/:habitId/edit", (req,res) => {
    const { habitId } = req.params

    Habit.findById(habitId)
    .then((habit) => {
        console.log("The habit you want to edit is this one: " + habit)
        res.render("profile/edit-habit")
    })
    .catch((error) => {
        console.log("there was an error trying to edit your habit: " + error)
    })
})

//route POST for editing a habit (6)
router.post("/profile/:habitId/edit-habit", (req,res) => {
    const { habitId } = req.params
    // const {keys from the model file for the habit} = req.body     !!!!!!!!!!!!!!!

    Habit.findByIdAndUpdate(habitId)
        .then((habit) => {
            console.log("Habit updated: " + habit)
            res.redirect(`/profile/${habitId}`)
        })
        .catch((error) => {
            console.log("Error occured while editing your habit: " + error)
        })
})

//route POST for deleting a habit (7)
router.post("/profile/:habitId/delete", (req,res) => {
    const { habitId } = req.params

    Habit.findByIdAndRemove(habitId)
        .then((habit) => {
            console.log(habit + " was deleted.")
            res.redirect("/profile")
        })
        .catch((error) => {
            console.log("Error while deleting a habit: " + error)
        })
})

module.exports = router