var express = require('express'),
app = express(),
port = process.env.PORT || 3001,
mongoose = require('mongoose'),
Game = require('./api/models/gameassignModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gamedb',{useMongoClient:true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/gameassignRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('games list RESTful API server started on: ' + port);