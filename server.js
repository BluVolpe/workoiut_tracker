const express = require('express');
const mongoose = require("mongoose");


const PORT = 3000;

const app = express();

app.use(express.static("public"));

app.use(require("./routes/routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });