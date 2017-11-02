const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const token_secret = 'turtleneck';


// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4', (err, db) => {
        if (err) return console.log(err);
        console.log('Connected to database');
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });

});

// Method to authenticate login and assign token
router.post('/authenticate', (req, res) => {
    let auth_token = '';
    let query = {'username': req.body.email, 'password': req.body.password}
    connection((db) => {
        db.collection('users')
            .find(query)
            .toArray(function(err, result) {
                if (err) throw err;
                if (result.length == 0){
                    //TODO: Invalid login
                    res.json({
                        success: false,
                        message: 'Authentication failed! Wrong username or password, or the user does not exist!'
                    })
                }
                else {
                    console.log('VALID LOGIN')
                    let timestamp_now = new Date().getTime();
                    let payload = {
                        'iss': 'warewolf.io',
                        'exp': timestamp_now + 3600,  // Session will expire after 1 hour from login
                        'username': req.body.email
                    }
                    auth_token = jwt.sign(payload, token_secret);
                }
                res.json({
                    success: true,
                    auth_token: auth_token
                })
                db.close();
              });
    })
    
});

// Get user profile
router.post('/profile', (req, res) => {
    console.log(req.body);
    let username = "";  //TODO: set username
    //TODO: Decode auth_token to username/email
    let auth_token = req.body.auth_token || req.query.auth_token || req.headers['auth_token'];
    if(auth_token){
        jwt.verify(auth_token, token_secret, function(err, decoded){
            if(err){ 
                return res.json({success: false, message: 'Failed to authenticate token!'})
            }
            else{
                username = decoded.username;
            }
        })
        if(username != ""){
            connection((db) => {
                db.collection('users')
                    .findOne({'username': username})
                    .then((users) => {
                        res.json({
                            success: true,
                            name: users.name,
                            role: users.role,
                            admin: users.admin
                        });
                    })
                    .catch((err) => {
                        sendError(err, res);
                    });
                    db.close();
            });
        }
        else {
            console.log("Cannot access username in payload, or something");
        }
    }
    else{
        return res.status(403).send({
            success: false,
            message: 'No token provided'
        })
    }
});




// // test adding user
// // TODO: refactor, add to api, add routing on success
// apiRoutes.get('/adduser', function(req, res) { 
//     var MongoClient = requidre('mongodb').MongoClient;
//     var url = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';
    
//     MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var myobj = {
//           name: 'Bob',
//           password: 'password', 
//           admin: true
//         };
//       db.collection('users').insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log('1 name inserted');
//         db.close();
//         });
//     });
//     res.send('Added new item');
// });


// // route to authenticate a user
// apiRoutes.post('/authenticate', function(req, res) {
//   console.log('HELLO WORLD!');
//   console.log(res);
//   console.log(req);
//     // find the user
//     // var MongoClient = require('mongodb').MongoClient;
//     // var url = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';

//     // MongoClient.connect(url, function(err, db) {
//     //   if (err) throw err;
//     //   db.collection('users').findOne({
//     //       name: req.body.name
//     //   }, function(err, user) {
//     //     if (err) throw err;
//     //     if (!user) {
//     //         res.json({ success: false, message: 'Authentication failed. User not found.' });
//     //       } else if (user) {
      
//     //         // check if password matches
//     //         if (user.password != req.body.password) {
//     //           res.json({ success: false, message: 'Authentication failed. Wrong password.' });
//     //         } else {
      
//     //           // if user is found and password is right
//     //           // create a token with only our given payload
//     //       // we don't want to pass in the entire user since that has the password
//     //       const payload = {
//     //         admin: user.admin 
//     //       };
//     //           var token = jwt.sign(payload, app.get('superSecret'), {
//     //             expiresInMinutes: 1440 // expires in 24 hours
//     //           });
      
//     //           // return the information including token as JSON
//     //           res.json({
//     //             success: true,
//     //             message: 'Enjoy your token!',
//     //             token: token
//     //           });
//     //         }   
      
//     //       }
      
//     //     console.log(result.name);
//     //     db.close();
//     //     });
//     // });    
// });

// // route middleware to verify a token
// apiRoutes.use(function(req, res, next) {
    
//       // check header or url parameters or post parameters for token
//       var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
//       // decode token
//       if (token) {
    
//         // verifies secret and checks exp
//         jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
//           if (err) {
//             return res.json({ success: false, message: 'Failed to authenticate token.' });    
//           } else {
//             // if everything is good, save to request for use in other routes
//             req.decoded = decoded;    
//             next();
//           }
//         });
    
//       } else {
    
//         // if there is no token
//         // return an error
//         return res.status(403).send({ 
//             success: false, 
//             message: 'No token provided.' 
//         });
    
//       }
//     });



module.exports = router;