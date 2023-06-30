const express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");
const usersRouter = require("./backend_routes/users");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
