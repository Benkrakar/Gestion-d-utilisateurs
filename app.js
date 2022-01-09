import express from 'express';
import path from 'path';
import morgan from 'morgan';
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
app.use(morgan('dev'));
//TODO:👋 enable morgan in dev only 👋

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.listen(3000);
