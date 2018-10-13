var express = require('express');
var bodyParser = require('body-parser');
var serverless = require('serverless-http');
// create express app
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.json({ "message": "Express.js and AWS Lambda — a serverless love story" });
});


require('./app/routes/note.routes.js')(app);


module.exports.handler = serverless(app);