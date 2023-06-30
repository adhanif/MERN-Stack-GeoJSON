const express = require("express");
const usersRouter = express.Router();
const { createUser } = require("../backend_controllers/users");





//
usersRouter.post("/", createUser);

// usersRouter.get("/", (req, res) => {
//   res.send("it is working");
// });

module.exports = usersRouter;
