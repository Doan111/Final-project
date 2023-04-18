//DB
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// generate unique id
const { v4: uuidv4 } = require("uuid");

// authentification handlers

//returns all the users from DB

//returns a single user from the DB
const getSingleUser = async (request, response) => {
  const client = new MongoClient(MONGO_URI, option);
  const userId = request.params.userId;
  try {
    await client.connect();
    const db = client.db("Finalproject");
    const user = await db.collection("Users").findOne({ _id: userId });
    if (user === null) {
      throw new Error(
        "Something went wrong trying to retrieve user from the database"
      );
    }
    client.close();
    return response.status(200).json({
      status: 200,
      message: "Retrieved user from database successfully",
      data: user,
    });
  } catch (error) {
    client.close();
    return response.status(404).json({ status: 404, error: error.message });
  }
};

// user's activities handlers

// get all activities from all users ( will be used in the homepage)
const getActivities = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("Finalproject");
    const result = await db.collection("Activities").find().toArray();
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res.status(404).json({ status: 404, message: "Data not found." });
  } finally {
    client.close();
  }
};

// get a single activity from the collection
const getActivity = async (request, response) => {
  const activity = request.params.activity;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Finalproject");
    const result = await db.collection("Activities").findOne({ _id: activity });

    if (!result) {
      return response.status(404).json({ status: 404, data: "Not Found" });
    } else {
      return response.status(200).json({
        status: 200,
        data: result,
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
};

// post an activity
const addActivity = async (request, response) => {
  const client = new MongoClient(MONGO_URI, options);

  const _id = uuidv4();

  try {
    await client.connect();
    const db = client.db("Finalproject");

    const result = await db
      .collection("Activities")
      .insertOne({ _id, ...request.body });
    console.log(result);
    if (result) {
      return response.status(200).json({
        status: 200,
        message: "The reservation was succesfully added",
        data: request.body,
      });
    } else {
      return response
        .status(400)
        .json({ status: 400, message: "Failure in adding an activity" });
    }
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
};

// delete an activity based on param
const deleteActivity = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const activity = req.params.activity;
  try {
    await client.connect();
    const db = client.db("Finalproject");
    const result = await db
      .collection("Activities")
      .deleteOne({ _id: activity });

    return res
      .status(200)
      .json({ status: 200, message: "The delete was successful" });
  } catch (error) {
    client.close();
    return res
      .status(502)
      .json({ status: 502, message: "Nothing was deleted" });
  }
};

// delete all current activities
const deleteAllActivities = async (request, response) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Finalproject");
    await db.collection("Activities").deleteMany({});

    return response
      .status(200)
      .json({ status: 200, message: "The delete was successful" });
  } catch (error) {
    client.close();
    return response
      .status(502)
      .json({ status: 502, message: "Nothing was deleted" });
  }
};

// update and activity
const updateActivity = async (request, response) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Finalproject");
    const result = await db.collection("Activities").findOneAndUpdate(
      {
        _id: request.body._id,
      },
      {
        $set: {
          ...request.body,
        },
      },
      { rawResult: true }
    );
    console.log(result);
    if (!result.ok) {
      return response
        .status(404)
        .json({ status: 404, message: "activity not found" });
    } else {
      return response.status(200).json({
        status: 200,
        message: "The activity has been successfuly updated",
      });
    }
  } catch (error) {
    console.log(error.stack);
  } finally {
    client.close();
  }
};

// get all activities from a specific user
const getActivitiesByUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const email = req.params.email;
  try {
    await client.connect();
    const db = client.db("Finalproject");
    const result = await db
      .collection("Activities")
      .find({ userEmail: email })
      .toArray();
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res.status(404).json({ status: 404, message: "Data not found." });
  } finally {
    client.close();
  }
};

module.exports = {
  getActivities,
  getActivity,
  addActivity,
  getSingleUser,

  deleteActivity,
  updateActivity,
  getActivitiesByUser,
  deleteAllActivities,
};
