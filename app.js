import express from 'express';
import path from 'path';
import routes from './routes/index.js';

const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use('/departements', routes.departementsRouter);
app.use('/users', routes.usersRouter);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/ddd', (req, res) => {
  res.render('index');
});

app.listen(3000);
