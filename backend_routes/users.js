const express = require("express");
const usersRouter = express.Router();
const { createUser } = require("../backend_controllers/users");

usersRouter.post("/", createUser);

module.exports = usersRouter;
