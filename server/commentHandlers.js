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











module.exports = {};