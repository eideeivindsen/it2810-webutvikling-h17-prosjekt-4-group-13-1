const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const app = express();
const apiRoutes = express.Router();

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./src/config'); // get our config file
//var User   = require('./app/models/user'); // get our mongoose model


// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Tokens
app.set('superSecret', config.secret); // secret variable

// Dev logging
//app.use(morgan('dev'));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);
app.use('/api', apiRoutes);


//////////////////
// API routes
//////////////////

// Send all other requests to the Angular app
apiRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// test adding user
// TODO: refactor, add to api, add routing on success
appRoutes.get('/adduser', function(req, res) { 
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var myobj = {
          name: "Bob",
          password: "password", 
          admin: true
        };
      db.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 name inserted");
        db.close();
        });
    });
    res.send("Added new item");
});


// route to authenticate a user
apiRoutes.post('/authenticate', function(req, res) {
    // find the user
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("customers").findOne({
          name: req.body.name
      }, function(err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
          } else if (user) {
      
            // check if password matches
            if (user.password != req.body.password) {
              res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
      
              // if user is found and password is right
              // create a token with only our given payload
          // we don't want to pass in the entire user since that has the password
          const payload = {
            admin: user.admin 
          };
              var token = jwt.sign(payload, app.get('superSecret'), {
                expiresInMinutes: 1440 // expires in 24 hours
              });
      
              // return the information including token as JSON
              res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
              });
            }   
      
          }
      
        console.log(result.name);
        db.close();
        });
    });    
});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
    
      // check header or url parameters or post parameters for token
      var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
      // decode token
      if (token) {
    
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
          if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.' });    
          } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;    
            next();
          }
        });
    
      } else {
    
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    
      }
    });

//Set Port
const port = process.env.PORT || '8083';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
