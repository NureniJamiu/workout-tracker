// import mongoose
const mongoose = require("mongoose");
// initialize mongoose schema
const Schema = mongoose.Schema;
// create a new schema "workoutSchema"
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
// export workoutSchema model
module.exports = mongoose.model("Workout", workoutSchema);
