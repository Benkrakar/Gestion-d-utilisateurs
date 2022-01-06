"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _dirname = _path.default.resolve();

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use('/departements', _index.default.departementsRouter);
app.use('/users', _index.default.usersRouter);
app.use((0, _morgan.default)('dev')); //TODO:👋 enable morgan in dev only 👋

app.set('view engine', 'pug');
app.set('views', _path.default.join(_dirname, 'views'));
app.get('/ddd', (req, res) => {
  res.render('index');
});
app.listen(3000);