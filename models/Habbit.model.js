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
    author: {
      type: Schema.Types.ObjectId, ref: "User"
    },

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
