const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const habitSchema = new Schema(
  {
    title: {
      type: String,
      trim: false,
      required: [true, "What do you want to track?"],
      unique: false,
      lowercase: false,
    },
    category: {
      type: String,
      enum: ["Health", "Sport", "Daily Routine", "Work"],
    },
    duration: {
      type: String,
      enum: ["7 days", "14 days", "21 days"],
    },
    description: {
      type: String,
    },
    creator: String,
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Habit = model("Habit", habitSchema);

module.exports = Habit;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: [String],
  cuisine: {
    type: String,
    required: true,
  },
  dishType: {
    type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min: 0,
  },
  creator: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
