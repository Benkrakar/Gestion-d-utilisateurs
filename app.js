const express = require("express");

const model = require("./models/index")
const routes = require("./routes/index");

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes.departementsRouter);
app.use("/users", routes.usersRouter);

const PORT = process.env.PORT || 3000;
model.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`app listning on port : ${PORT}`);
  });
});
