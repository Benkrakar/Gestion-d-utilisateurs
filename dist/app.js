"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

require("dotenv/config");

var _path = _interopRequireDefault(require("path"));

var _index = _interopRequireDefault(require("./routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Server from './server/index.js';
const app = (0, _express.default)();

const _dirname = _path.default.resolve();

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _morgan.default)('dev')); //TODO:👋 enable morgan in dev only 👋

app.use('/departements', _index.default.departementsRouter);
app.use('/', _index.default.usersRouter);
app.set('view engine', 'pug');
app.set('views', _path.default.join(_dirname, 'views'));
app.use(_express.default.static(_path.default.join(_dirname, 'public')));
const PORT = 3000;
app.listen(PORT, () => {
  console.log('app running');
});