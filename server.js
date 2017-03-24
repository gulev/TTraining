const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const app = express()
const router = express.Router()

var User = require('./models/User')
var Program = require('./models/Program')

app.use(bodyParser.json())
app.use(methodOverride())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

mongoose.connect('mongodb://localhost:27017/train')
var db = mongoose.connection;

// When successfully connected
db.on('connected', function () {  
  console.log('Mongoose default connection open ');
}); 

// If the connection throws an error
db.on('error', console.error.bind(console, 'connection error:'));

// When the connection is disconnected
db.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

restify.serve(router, User)
restify.serve(router, Program)

app.use(router)

app.listen(2000, () => {
  console.log('Express server listening on port 2000 ')
})
//георги сава раковски 27