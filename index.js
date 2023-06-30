const express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
