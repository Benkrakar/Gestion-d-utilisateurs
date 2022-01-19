import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import path from 'path';

import routes from './routes/index.js';

// import Server from './server/index.js';

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(morgan('dev'));
//TODO:👋 enable morgan in dev only 👋

app.use('/departements', routes.departementsRouter);
app.use('/', routes.usersRouter);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app running on ${PORT} port 👍👍👍`);
});
