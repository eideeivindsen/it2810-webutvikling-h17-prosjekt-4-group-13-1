const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const expressJWT = require('express-jwt');
const jwtPayloadDecoder = require('jwt-payload-decoder')
const jwtSimple = require('jwt-simple')
const atob = require('atob')

const router = express.Router();

const token_secret = 'turtleneck';
const cryptKey = 'turtleneck';
const dbLocation = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';

// Our middleware to validate JWT
router.use(expressJWT({ secret: 'turtleneck' }).unless({ path: ['/login', '/api/authenticate', '/api/register']}));

/* Connection method and response/error handling */

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

let error = {
    status: 404,
    message: null
};

/* GET Requests */

// Get all products 
router.get('/products/getAll', (req, res) => {
    connection((db) => {
        db.collection('products')
            .find()  
            .toArray()
            .then((products) => {
                response.data = products;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get user profile
router.get('/profile', (req, res) => {
    let auth_token = req.headers['authorization'].slice(7);  // Remove 'Bearer ' from the header to get token
    let decoded = jwt.decode(auth_token);
    let username = (decoded.username);
    connection((db) => {
        db.collection('users')
        .find({"username" : username})
        .toArray()
        .then((user) => {
            console.log(user);
            response.data = user;
            response.message = "Successfully got profile information";
            res.json(response);
        }).catch((err)=> {
            sendError(err,res);
        })
        db.close();
    });

});

/* POST Requests */

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
            // Add user to database
            connection((db) => {
                try{
                    db.collection('users').insertOne(newUser);
                    response.data = []
                    response.message = "Added user: " + newUser.name
                    res.send(response)
                }catch (error){
                    console.log("Error: " + error);
                    res.json(sendError);
                }
                db.close();
            })
        });
    });
 });

// Add a new product to the database
router.post('/products/add', (req, res) => {
    connection((db) => {
        try {
            db.collection('products')
            .insertOne({
                'name': req.body.name,
                'category': req.body.category,
                'producer': req.body.producer,
                'origin': req.body.origin,
                'price': req.body.price,
                'weight': req.body.weight,
                'description': req.body.description,
                'quantity': req.body.quantity,
                'in_stock': req.body.in_stock,
                'kilo_price': req.body.kilo_price
            }) 
            response.data = []  // Should not return data in the response
            response.message = 'A new product was added!'
            res.json(response);
        } catch (error) {
            console.log("Error: " + error);
            res.json(sendError);
        }
        db.close();
    });
});

// Method to authenticate login and assign token
router.post('/authenticate', (req, res) => {
    console.log('Running authentication...')
    let query = {username: req.body.email};
    connection((db) => {
        // Find user with username, they are unique
        db.collection('users').find(query).toArray().then((user) => {
            if (user.length == 0){
                //TODO: Invalid login
                console.log('Invalid username')
                error.message = 'Authentication failed! Invalid username (email)! The user does not exist';
                error.status = 403;
                res.json(error);
            } else {
                // Check if password is true
                let hash = user[0].password;
                bcrypt.compare(req.body.password, hash, function(err, checkRes) {
                    if (err) throw err;
                    // If password is wrong
                    if (checkRes === false) {
                        console.log('Invalid password')
                        error.message = 'Authentication failed! Wrong password!';
                        error.status = 403;
                        res.json(error);
                    }
                    // If password is right
                    else {
                        console.log('Valid! Logging in...')
                        let timestamp_now = new Date().getTime();
                        let payload = {
                            'iss': 'warewolf.io',
                            'exp': timestamp_now + 3600,  // Session will expire after 1 hour from login
                            'username': req.body.email
                        }
                        auth_token = jwt.sign(payload, token_secret);
                        response.data = [auth_token];
                        response.message = 'Authentication successful! Userdata and token provided'
                        res.json(response);
                    }
                });
            }
        }).catch((err)=> {
            sendError(err,res);
        })
        console.log('Closing connection...');
        db.close();
    })
});



module.exports = router;