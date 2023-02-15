// import express
const express = require("express");
// import all workout controllers from controllers directory
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

// initialize express router
const router = express.Router();

// middleware to check for authorization
router.use(requireAuth);

// get all workouts
router.get("/", getWorkouts);

// post a new workout
router.post("/", createWorkout);

// get a single workout
router.get("/:id", getWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

// export router
module.exports = router;
