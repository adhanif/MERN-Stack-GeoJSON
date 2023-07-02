const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const user = mongoose.model("Users", userSchema);
// Create the geospatial index for the location field
// user.collection.createIndex({ location: "2dsphere" });
module.exports = user;
