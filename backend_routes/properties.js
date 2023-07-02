const express = require("express");
const propertiesRouter = express.Router();
const {
  createProperty,
  getAllProperties,
  getProperty,
  getPropertiesNearby,
  updateProperty,
} = require("../backend_controllers/properties");
propertiesRouter.post("/", createProperty);
propertiesRouter.get("/near-by", getPropertiesNearby);
propertiesRouter.get("/", getAllProperties);
propertiesRouter.get("/:id", getProperty);
propertiesRouter.put("/:id", updateProperty);

module.exports = propertiesRouter;
