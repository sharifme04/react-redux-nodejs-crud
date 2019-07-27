var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  Promise = require("bluebird"),
  mongoose = require('mongoose'),
  contactlist = require('./routes/contactlist');
  //router = require('./routes/api'),
  //index = require('./routes/index');


var app = express();
//connect to mongodb general is the database name

mongoose.connect('mongodb://localhost/general');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/contactlist',contactlist);
//route initialize
//app.use('/api',router);
//app.use(router);
//app.use(index);

//app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(__dirname + '/dist'));

app.listen(4000);
console.log('server 4000 port is running in backend for react-crud');
