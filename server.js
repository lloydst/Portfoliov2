const express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const app = express();
const path = require('path');
const api = require('./server/routes/api');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./server/routes/index');
const MURI = process.env.MURI || 'mongodb://localhost/portfolio';
mongoose.connect( MURI, {useMongoClient: true})
var db = mongoose.connection;
var mid = require('./server/middleware');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));
// make user ID available in templates
app.use(function (req, res, next) {
  res.locals.currentUser = req.session.userId;

  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'dist'))).get('/blog-admin', mid.requiresLogin, mid.isLoggedIn)
app.use('/projects/jscalc', express.static(path.join(__dirname,'./server/views/htmlcalc')));
app.use('/projects/jqcalc', express.static(path.join(__dirname,'./server/views/jquerycalc')));
app.use('/projects/angularcalc', express.static(path.join(__dirname,'./server/views/angularjscalc')));
app.use('/projects/bomberman', express.static(path.join(__dirname,'./server/views/bomberman')));
app.use('/projects/hangman', express.static(path.join(__dirname,'./server/views/hangman')));
app.use('/images', express.static(path.join(__dirname,'./server/public/img'))); // to select a img <host>/images/<img-name+type>
app.use('/api',api)
app.use('/auth', routes);
app.use('*',express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT||3000;
app.listen(process.env.PORT||3000, function(){
  console.log('Example app listening on port ' + port +'!')
})
