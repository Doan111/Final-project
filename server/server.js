// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const {
  getActivities,
  getActivity,
  getSingleUser,
  getUsers,
  addActivity,
  deleteActivity,
  updateActivity,
  getActivitiesByUser,
} = require("./handlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // routes for activities(all working)
  // get all activites from database
  .get("/api/get-activities", getActivities)
  // get a single activity based on it's unique id
  .get("/api/get-activity/:activity", getActivity)
  // add an activity
  .post("/api/add-activity", addActivity)
  // delete an id based on its unique id
  .delete("/api/delete-activity/:activity", deleteActivity)
  //update an activity
  .patch("/api/update-activity", updateActivity)
  // get all activities from a single user
  .get("/api/get-activities/:email", getActivitiesByUser)
  // routes for users
  .get("/api/users", getUsers)
  .get(`/api/user/:userId`, getSingleUser)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
