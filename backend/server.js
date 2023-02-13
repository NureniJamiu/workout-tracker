// IMPORTS
// import express
const express = require("express");
// import dotenv
const dotenv = require("dotenv");
// import mongoose
const mongoose = require("mongoose");
// import workout routes from "routes" directory as "workoutRoutes"
const workoutRoutes = require("./routes/workouts");
// import user routes from "routes" directory as "userRoutes"
const userRoutes = require("./routes/user");

// INITIALIZATION AND CONFIGURATIONS
// initialize express server
const app = express();
// set port to listen on as the port in the ".env" folder or port 5000
const port = process.env.PORT || 5000;
// configure dotenv
dotenv.config();

// MIDDLEWARES --> Fires up immediately a path is being routed to.
app.use(express.json());
app.use((req, res, next) => {
  // logs the path of the request made and the request method (ex: POST/GET/DELETE/PATCH...) to the console.
  console.log(req.path, req.method), next();
});

// ROUTE
app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);

// CONNECT TO DB
mongoose.set("strictQuery", false);
//connect using the uri set in the ".env" folder
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // CONFIGURE SERVER TO LISTEN ON DOTENV PORT
    app.listen(port, () => {
      // if successful, log the message: ...
      // ... "Connected to DB\nServer is now listening on port {whatever port is specified in the ".env"}" to the console.
      console.log(`Connected to DB\nServer is now listening on port ${port}`);
    });
  }) // if not successful for any reason, catch the error and...
  .catch((err) => {
    // ...log the error message to the console.
    console.log(err.message);
  });
