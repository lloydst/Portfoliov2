// server packages
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// routes
var index = require('./routes/index');
var api = require('./routes/api');


//Set up mongoose connection
var mongoose = require('mongoose');

// need to change this based on env
var mongoDB= 'mongodb://localhost:27017/portfolio'
if(process.env.NODE_ENV === "production") {
  return mongoDB = 'mongodb://admin:admin@ds153853.mlab.com:53853/portfolio';
} else if(process.env.NODE_ENV === "dev"){
  return mongoDB = 'mongodb://localhost:27017/portfolio'

}


mongoose.connect(mongoDB, {
  useMongoClient: true
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// express setup
var app = express();
// for heroku
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === "production") {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}


// middlewares
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(forceSSL());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

// express paths
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/projects/jscalc', express.static(path.join(__dirname,'./views/htmlcalc')));
app.use('/projects/jqcalc', express.static(path.join(__dirname,'./views/jquerycalc')));
app.use('/projects/angularcalc', express.static(path.join(__dirname,'./views/angularjscalc')));
app.use('/projects/bomberman', express.static(path.join(__dirname,'./views/bomberman')));
app.use('/projects/hangman', express.static(path.join(__dirname,'./views/hangman')));
// routes aka controllers
//app.use('/', index);
app.use('/api', api)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});



module.exports = app;
