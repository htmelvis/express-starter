import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import session from 'express-session';

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');


app.use(function (req, res, next) {
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

app.get('/', (req, res) => {
    res.send('Go!');
});

export default app;
