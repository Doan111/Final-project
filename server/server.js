// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const {
  getActivities,
  getActivity,
  getSingleUser,
  getUsers,
} = require("./handlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // routes for activities
  .get("/api/get-activities", getActivities)
  .get("/api/get-activity/:activity", getActivity)

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
