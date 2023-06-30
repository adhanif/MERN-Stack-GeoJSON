const express = require("express");
const propertiesRouter = express.Router();
const { createProperty } = require("../backend_controllers/properties");
propertiesRouter.post("/", createProperty);

module.exports = propertiesRouter;
