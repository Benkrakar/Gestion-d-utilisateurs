const express = require("express");

let app = express();

const model = require("./models/index")
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes.departementsRouter);
app.use("/users", routes.usersRouter);

