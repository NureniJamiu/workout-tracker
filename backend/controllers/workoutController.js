// import the workout model from the models directory and save it in a "Workout" constant.
const Workout = require("../models/workoutModel");
// import mongoose
const mongoose = require("mongoose");

// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
  try {
    // finds all created workouts after sorting them by the date created and saves them in the "workout" constant
    const workout = await Workout.find({}).sort({ createdAt: -1 });
    // if successful, return a status code '200' and the json format of the workouts saved in the "workout" constant.
    res.status(200).json(workout);
    // ...but if not successfull i.e in case of an error,
  } catch (err) {
    // return a status code '400' including the json format of the error message
    res.status(400).json({ err: err.message });
  }
};

// GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
  // extract the request parameter and save it to the "id" constant
  const { id } = req.params;
  // if the parameter id is NOT the same id as the mongoose generated "id"...
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // ...return a status code of "404" and also the json format of a nice error message: "No such Workout"
    return res.status(404).json({ error: "No such workout" });
  }
  // find a single workout by "id" in the workout model imported above as "Workout"...
  // ...and then save it to a constant called "workout"
  const workout = await Workout.findById(id);
  // if no such workout exists,...
  if (!workout) {
    // return a 404 status code and a nice error message: "No such Workout"
    return res.status(404).json({ error: "No such workout" });
  }
  // ...however, if it does exist, return a 200 status code and the json format of the workout object.
  res.status(200).json(workout);
};

// CREATE A WORKOUT
const createWorkout = async (req, res) => {
  // save the body request parameters in a "title", "reps" and "load" constants respectively
  const { title, reps, load } = req.body;
  // create an empty array called "emptyFields"
  let emptyFields = [];
  // if "title" doesn't exist in the body request params,...
  if (!title) {
    // push the string "title" to the "emptyFields" array
    emptyFields.push("title");
  }
  // if "load" doesn't exist in the body request params,...
  if (!load) {
    // push the string "load" to the "emptyFields" array
    emptyFields.push("load");
  }
  // if "reps" doesn't exist in the body request params,...
  if (!reps) {
    // push the string "reps" to the "emptyFields" array
    emptyFields.push("reps");
  }
  // if the array length of the emptyField is greater than 0,...
  // ...that shows that an input field or more is still empty therefore,...
  if (emptyFields.length > 0) {
    // return a 404 response code, a nice json error message, and what the "emptyFields" array contains
    return res
      .status(400)
      .json({ error: "Please input all fields", emptyFields });
  }
  // if all fields are validated, try...
  try {
    // ...creating, with these params (title, reps, and load), a new workout and save it in a "workout" constant
    const workout = await Workout.create({ title, reps, load });
    // return a 200 status code if successful and also the json format of the workout added.
    res.status(200).json(workout);
    // ...but if not successfull i.e in case of an error,
  } catch (err) {
    // ...return a status code of "404" and also the json format of the error message"
    res.status(400).json({ error: err.message });
  }
};

// UPDATE A WORKOUT
const updateWorkout = async (req, res) => {
  // extract the request parameter and save it to the "id" constant.
  const { id } = req.params;
  // if the parameter id is NOT the same id as the mongoose generated "id"...
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // ...return a status code of "404" and also the json format of a nice error message: "No such Workout"
    return res.status(404).json({ error: "No such Workout" });
  }
  // ...but if the parameter "id" is the same as a workout "id",
  // find and update the workout that has that "_id" and save it to the "workout" constant
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      // spread the parameters in the body request to update the workout
      ...req.body,
    }
  );
  // ...however if no "workout" constant, which means that there exist no workout with the request params id
  if (!workout) {
    // return a 400 status code and a nice json error message: "No such workout"
    return res.status(400).json({ error: "No such workout" });
  }
  // but if everything went well and the workout with that has the request parameter id gets updated,
  // return a 200 status code and a json confirmation message: "Workout updated successfully"
  res.status(200).json({ message: "Workout updated successfully" });
};

// DELETE A WORKOUT
const deleteWorkout = async (req, res) => {
  // extract the request parameter and save it to the "id" constant
  const { id } = req.params;
  // if the parameter id is NOT the same id as the mongoose generated "id"...
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // ...return a status code of "404" and also the json format of a nice error message: "No such Workout"
    return res.status(404).json({ error: "No such workout" });
  }
  // ...but if the parameter "id" is the same as a workout "id",
  // find and delete the workout that has that "_id" and save it to the "workout" constant
  const workout = await Workout.findOneAndDelete({ _id: id });
  // if no workout is found,...
  if (!workout) {
    // return a 400 status code and a nice json error message: "No such workout"
    return res.status(400).json({ error: "No such workout" });
  }
  // but if everything went well and the workout with that has the request parameter id gets deleted,
  // return a 200 status code and the json object of the workout
  res.status(200).json(workout);
};
// export all controllers
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
