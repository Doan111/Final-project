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

const addUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("Finalproject");

    const existingUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    if (!existingUser) {
      await db.collection("users").insertOne({ ...req.body, _id: uuidv4() });
      return res
        .status(201)
        .json({ status: 201, message: "user added to the db" });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "user already exists!" });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ status: 400, message: "Error in adding user to the db" });
  }
};

const getUsers = async (request, response) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Finalproject");
    const users = await db.collection("users").find().toArray();
    if (users.length === 0) {
      throw new Error("There are no users in the database");
    }
    client.close();
    return response.status(200).json({
      status: 200,
      message: "Retrieved users from database successfully",
      data: users,
    });
  } catch (error) {
    client.close();
    return response.status(404).json({ status: 404, error: error.message });
  }
};

module.exports = { addUsers, getUsers };
