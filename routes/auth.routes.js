const router = require("express").Router();
const bcrypt = require("bcryptjs");
User = require("../models/User.model");
const saltRounds = 10;
const mongoose = require("mongoose");

// GET route ==> to display the signup form to users
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// POST route ==> to process form data
router.post("/signup", (req, res, next) => {
  //req.body what a user has submitted
  console.log("Data from user: ", req.body);
  const { username, email, password } = req.body;
  // Checking if all required fields are provided
  if (!username || !email || !password) {
    return res.render("auth/signup", {
      errorMessage:
        "All fields are mandatory. Please provide your username, email and password.",
    });
  }

  // Validation of the username with regex
  // Username may include _ and – having a length of 3 to 16 characters
  const regexUsername = /^[a-z0-9_-]{3,16}$/;
  if (!regexUsername.test(username)) {
    return res.render("auth/signup", {
      errorMessage:
        "Please enter a username with a length of 3 to 16 characters. It may include '_'",
    });
  }

  // Validation of the password with regex
  // Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long

  const regexPassword =
    /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  if (!regexPassword.test(password)) {
    return res.render("auth/signup", {
      errorMessage:
        "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long",
    });
  }

  bcrypt
    .hash(password, saltRounds)
    // another approach
    // at first generate the salt number, then to put salt number and bcrypted password together
    /* bcrypt
      .genSalt(saltRounds)
      .then((salt) => {
        return bcrypt.hash(password, salt);
      }) */
    .then((hashedPassword) => {
      console.log("Hashed Password: ", hashedPassword);
      return User.create({
        username: username,
        email: email,
        // passwordHash => this is the key from the User model
        // hashedPassword => this is placeholder (how we named returning value from the previous method .hash()
        passwordHash: hashedPassword,
      });
    })
    .then((newUserCreatedInDB) => {
      console.log("New created user is: ", newUserCreatedInDB);
      res.redirect("/login");
    })
    .catch((error) => {
      // Check if any of our mongoose validators are not being met
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message });
      }
      // Check if the email is already registered with our website
      else if (error.code === 11000 && error.keyPattern.email === 1) {
        console.log(error);
        res.render("auth/signup", {
          errorMessage:
            "There is already an account associated with this email please sign in or sign up with new email",
        });
      } else if (error.code === 11000 && error.keyPattern.username === 1) {
        console.log(error);
        res.render("auth/signup", {
          errorMessage:
            "This username already exists. Please choose another username.",
        });
      } else {
        next(error);
      }
    });
});

router.get("/login", (req, res, next) => res.render("auth/login"));

/* router.get("/profile", (req, res, next) => {
  res.render("profile/habitboard");
}); */

router.post("/login", (req, res, next) => {
  const { username, email, password } = req.body;

  // Checking if the user filled in all the required fields
  if (!username || !email || !password) {
    return res.render("auth/login", {
      errorMessage:
        "Login failed. Please enter a valid username, email and password",
    });
  }
  // Checking if the user is already registered with our website

  User.findOne({ username })
    .then((user) => {
      console.log(user);
      if (!user) {
        res.render("auth/signup", {
          errorMessage: "User not found please sign up.",
        });
      }
      //compareSync() is used to compare the user inputted password with the hashed password in the database
      else if (bcrypt.compareSync(password, user.passwordHash)) {
        res.redirect("/profile");
      } else {
        res.render("auth/login", { errorMessage: "Incorrect Password" });
      }
    })

    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
