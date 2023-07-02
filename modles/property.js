const mongoose = require("mongoose");
const user = require("./user");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});
// const point = mongoose.model("Point", pointSchema);

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  area: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  availability: {
    type: String,
    enum: ["vacant", "rented", "sold"],
    default: "vacant",
  },
  createdAt: {
    type: Date,
    required: true,
  },
  location: {
    type: pointSchema,
    index: "2dsphere",
  },
});
propertySchema.index({ location: "2dsphere" });
const property = mongoose.model("property", propertySchema);

module.exports = property;
