import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import session from 'express-session';

import defaultRoutes from './routes/defaultRoutes';

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  res.header("X-Powered-By", "Lions, tigers, and bears! Oh my!");
  next();
});

app.use(session({
  secret: 'This is not public.',
  resave: false,
  saveUninitialized: false
}));

defaultRoutes(app);

app.use( (req, res) => {
  res.status(404).render('404.ejs');
});

export default app;
