// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const {
  getActivities,
  getActivity,
  getSingleUser,

  addActivity,
  deleteActivity,
  updateActivity,
  getActivitiesByUser,
  deleteAllActivities,
} = require("./activityHandlers");

const { addUsers, getUsers } = require("./UserHandlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // get all activites from database
  .get("/api/get-activities", getActivities)
  // get a single activity based on it's unique id
  .get("/api/get-activity/:activity", getActivity)
  // add an activity
  .post("/api/add-activity", addActivity)
  // delete an id based on its unique id
  .delete("/api/delete-activity/:activity", deleteActivity)
  // delete all activities
  .delete("/api/delete-all-activities", deleteAllActivities)
  //update an activity
  .patch("/api/update-activity", updateActivity)
  // get all activities from a single user
  .get("/api/get-activities/:email", getActivitiesByUser)
  // routes for users

  .get(`/api/user/:userId`, getSingleUser)
  .post("/api/users", addUsers)
  .get("/api/users", getUsers)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
