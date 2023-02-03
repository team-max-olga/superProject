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
      enum: ["Health", "Sport", "Daily Routine", "Work", "Art"],
    },
    duration: {
      type: String,
      enum: ["7 days", "14 days", "21 days"],
    },
    description: {
      type: String,
    },
    author: [{
      type: Schema.Types.ObjectId, ref: "User"
    }],
    week1Tracker: [{
      name: String,
      done: {
        type: Boolean,
        default: false
      }
    }],
    week2Tracker: [{
      name: String,
      done: {
        type: Boolean,
        default: false
      }
    }],
    week3Tracker: [{
      name: String,
      done: {
        type: Boolean,
        default: false
      }
    }],

    /* 
    author: {
      objectId
    }
    */
    // creator: String,
    // created: {
    //   type: Date,
    //   default: Date.now,
    // },
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Habit = model("Habit", habitSchema);

module.exports = Habit;
