const express = require("express");
const propertiesRouter = express.Router();
const {
  createProperty,
  getAllProperties,
  getProperty,
} = require("../backend_controllers/properties");
propertiesRouter.post("/", createProperty);
propertiesRouter.get("/", getAllProperties);
propertiesRouter.get("/:id", getProperty);

module.exports = propertiesRouter;
