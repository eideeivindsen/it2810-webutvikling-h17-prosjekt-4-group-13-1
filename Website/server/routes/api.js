const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const expressJWT = require('express-jwt');
const jwtPayloadDecoder = require('jwt-payload-decoder')
const atob = require('atob')

const router = express.Router();

const token_secret = 'turtleneck';
const cryptKey = 'turtleneck';
const dbLocation = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';

router.use(expressJWT({ secret: 'turtleneck' }).unless({ path: ['/login', '/api/authenticate', '/api/register']}));


// Connect
const connection = (closure) => {
    return MongoClient.connect(dbLocation, (err, db) => {
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

 // Register user
 router.post('/register', (req, res, next) => {
    let newUser = {
        // name, username, password, role, createdAt
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        createdAt: req.body.createdAt
    };

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            // add user to database
            MongoClient.connect(dbLocation, function(err, db) {
                if (err) throw err;
                db.collection('users').insertOne(newUser, function(err, res) {
                    if (err) throw err;
                    console.log(newUser.name + " inserted");
                db.close();
                });
            });
        res.send("Added user " + newUser.name);
        });
    });
 });

/* GET Requests */
// Get all users
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

// Get all categories
router.get('/categories', (req, res) => {
    connection((db) => {
        db.collection('descriptive_data')
            .find({categories: { $exists: true }})  //Finds the record where the key 'categories' is present. Should only be one.
            .toArray()
            .then((categories) => {
                response.data = categories;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get all producers

/* POST Requests */






router.post('/products/add', (req, res) => {
    console.log(req.body)
});

// Method to authenticate login and assign token
router.post('/authenticate', (req, res) => {
    let query = {username: req.body.email};
    // console.log(req.body.email + "<<<>>>" + query.username);
    // , 'password': req.body.password
    connection((db) => {
        // find users with username
        db.collection('users').find(query).toArray(function(err, result) {
            //console.log(">>>>>>>>" + query.username + result);
            if (err) throw err;
            if (result.length == 0){
                //TODO: Invalid login
                //console.log(">>>>>Failed at user check")
                res.json({
                    success: false,
                    message: 'Authentication failed! User does not exist!'
                })
            } else {
                // check if password is true
                let hash = result[0].password;
                bcrypt.compare(req.body.password, hash, function(err, checkRes) {
                    console.log("<><>><><><><" + hash + "<>><<><>>>" + req.body.password);
                    if (checkRes === false) {
                        console.log(">>>>>Failed at hash check");
                        res.json({
                            success: false,
                            message: 'Authentication failed! Wrong password!'
                        })
                    }
                    if (checkRes === true) {
                        let timestamp_now = new Date().getTime();
                        let payload = {
                            'iss': 'warewolf.io',
                            'exp': timestamp_now + 3600,  // Session will expire after 1 hour from login
                            'username': req.body.email
                        }
                        auth_token = jwt.sign(payload, token_secret);
                        res.json({
                            success: true,
                            auth_token: auth_token
                        });
                    }
                });
            }
            db.close();
            });
    })

});

// Get user profile
router.get('/profile', (req, res) => {
    let auth_token = req.headers['authorization'].slice(7);
    // let payload = jwtPayloadDecoder.getPayload(auth_token);
    
    connection((db) => {

        
    });

});

module.exports = router;
