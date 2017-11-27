const express = require('express')
const app = express();
const path = require('path')
const api = require('./server/routes/api')
const mongoose = require('mongoose')

const MURI = process.env.MURI ||'mongodb://admin:admin@ds153853.mlab.com:53853/portfolio';
mongoose.connect(MURI, {useMongoClient: true})
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/',express.static(path.join(__dirname, 'dist')))
app.use('/projects/jscalc', express.static(path.join(__dirname,'./server/views/htmlcalc')));
app.use('/projects/jqcalc', express.static(path.join(__dirname,'./server/views/jquerycalc')));
app.use('/projects/angularcalc', express.static(path.join(__dirname,'./server/views/angularjscalc')));
app.use('/projects/bomberman', express.static(path.join(__dirname,'./server/views/bomberman')));
app.use('/projects/hangman', express.static(path.join(__dirname,'./server/views/hangman')));
app.use('/api',api)
app.use('*',express.static(path.join(__dirname, 'dist')))


app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
})
