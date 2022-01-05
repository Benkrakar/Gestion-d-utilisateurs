"use strict";
import express from "express";
import model from "./models/index.js";
import routes from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/departements", routes.departementsRouter);
app.use("/users", routes.usersRouter);
app.listen(3000, () => console.log("fffff"));
