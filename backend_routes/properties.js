const express = require("express");
const propertiesRouter = express.Router();
const {
  createProperty,
  getAllProperties,
} = require("../backend_controllers/properties");
propertiesRouter.post("/", createProperty);
propertiesRouter.get("/", getAllProperties);

module.exports = propertiesRouter;
