const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const morgan = require('morgan')
const logger = morgan('combined')
// API file for interacting with MongoDB
const api = require('./server/routes/api');



//Set up mongoose connection
var mongoose = require('mongoose');

// need to change this based on env
var mongoDB = 'mongodb://admin:admin@ds153853.mlab.com:53853/portfolio';
if(process.env.NODE_ENV === 'production') {
  return mongoDB = 'mongodb://admin:admin@ds153853.mlab.com:53853/portfolio';
} else if(process.env.NODE_ENV === "dev"){
  return mongoDB = 'mongodb://localhost:27017/portfolio'

}


mongoose.connect(mongoDB, {
  useMongoClient: true
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// required for heroku
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
app.use(forceSSL());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// express Paths
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/projects/jscalc', express.static(path.join(__dirname,'./server/views/htmlcalc'))); // works
app.use('/projects/jqcalc', express.static(path.join(__dirname,'./server/views/jquerycalc'))); // works
app.use('/projects/angularcalc', express.static(path.join(__dirname,'./server/views/angularjscalc'))); // works
app.use('/projects/bomberman', express.static(path.join(__dirname,'./server/views/bomberman'))); // works only locally
app.use('/projects/hangman', express.static(path.join(__dirname,'./server/views/hangman'))); // works only locally
// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// keep heroku alive always to prevent new users from having to wait for the free dyno to speed up



