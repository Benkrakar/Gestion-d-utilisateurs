"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./models/index"));

var _index2 = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use("/", _index2.default.departementsRouter);
app.use("/users", _index2.default.usersRouter);
app.listen(3000, () => console.log("fffff"));