const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const expressJWT = require('express-jwt');
const dbConfig = require('./../db.config.js');


const router = express.Router();

const token_secret = 'turtleneck';
const cryptKey = 'turtleneck';
const dbLocation = dbConfig.database;

// Our middleware to validate JWT
router.use(expressJWT({ secret: 'turtleneck' }).unless({ path: [
    '/login',
    '/api/authenticate',
    '/api/debug/users',
    '/api/register',
    '/api/register',
    '/api/products/get',
    '/api/products/getAll']}));

//Connection method and response/error handling

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
    let filter = JSON.parse(req.query.filter);
    let query = new RegExp('.*' + filter.query.toLowerCase() + '.*', 'i');
    let categoryDefault = new RegExp('.*', 'i');
    let producerDefault = new RegExp('.*', 'i');

    // Setting default params
    let params = {
        'name': {$regex: query},
        'category': {$regex: categoryDefault},
        'producer': {$regex: producerDefault},
        'in_stock': {$in: [true, false]},
        'price': {$gt: 0},
    }

    // Setting appropriate params
    if(filter.advanced){
        if(filter.category != 'Show all' && filter.category != ''){
            params['category'] = filter.category;
        }
        if(filter.producer != 'Show all' && filter.producer != ''){
            params['producer'] = filter.producer;
        }
        if(filter.inStock){
            params['in_stock'] = filter.inStock;
        }
        if(filter.price > 0){
            params['price'] = {$lt: filter.price}
        }
    }

    connection((db) => {
        db.collection('products')
        .find(params)
        .toArray()
        .then((products) => {
            response.data = products;
            response.message = "Got products!";
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
});



// Get products
router.get('/products/get', (req, res) => {
    let filter = JSON.parse(req.query.filter);
    let sort = JSON.parse(req.query.sort);
    let index = JSON.parse(req.query.index);

    let pageLimit = 5;
    let startindex = index * 5;
    let query = new RegExp('.*' + filter.query.toLowerCase() + '.*', 'i');
    let categoryDefault = new RegExp('.*', 'i');
    let producerDefault = new RegExp('.*', 'i');

    // Setting default params
    let params = {
        'name': {$regex: query},
        'category': {$regex: categoryDefault},
        'producer': {$regex: producerDefault},
        'in_stock': {$in: [true, false]},
        'price': {$gt: 0},
    }

    // Setting appropriate params
    if(filter.advanced){
        if(filter.category != 'Show all' && filter.category != ''){
            params['category'] = filter.category;
        }
        if(filter.producer != 'Show all' && filter.producer != ''){
            params['producer'] = filter.producer;
        }
        if(filter.inStock){
            params['in_stock'] = filter.inStock;
        }
        if(filter.price > 0){
            params['price'] = {$lt: filter.price}
        }
    }

    connection((db) => {
        db.collection('products')
        .find(params)
        .sort(sort.sortBy, sort.order)
        .toArray()
        .then((products) => {
            response.data = [products.slice(startindex, startindex+pageLimit), products.length];
            response.message = "Got products!";
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
})

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
            response.data = user;
            response.message = "Successfully got profile information";
            res.json(response);
        }).catch((err)=> {
            sendError(err,res);
        })
        db.close();
    });
});

// Get user profile
router.get('/profile/history', (req, res) => {
    let auth_token = req.headers['authorization'].slice(7);  // Remove 'Bearer ' from the header to get token
    let decoded = jwt.decode(auth_token);
    let username = (decoded.username);
    connection((db) => {
        db.collection('users')
        .find({"username" : username}, {search_history: true})
        .toArray()
        .then((history) => {
            response.data = history[0].search_history;  // Returns the array 'search_history"
            response.message = "Successfully got recent history";
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

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            req.body.password = hash;
            // Add user to database
            connection((db) => {
                try{
                    db.collection('users').insertOne(req.body)
                    .then(function() {
                        response.data = [];
                        response.message = "Added user: " + req.body.name;
                        res.json(response);
                    }).catch (function(){
                        error.status = 409;
                        error.message = "That username (email) is taken!";
                        res.json(error);
                    })
                }catch (err){
                    console.log("Error: " + err);
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
            .insertOne(req.body)
            .then(function(){
                response.data = []  // Should not return data in the response
                response.message = 'A new product was added!'
                res.json(response);
            })
            .catch(function(){
                error.status = 409;
                error.message = "This product already excists in the database!";
                res.json(error);
            })
        } catch (err) {
            console.log("Error: " + err);
            res.json(sendError);
        }
        db.close();
    });
});

// Method to authenticate login and assign token
router.post('/authenticate', (req, res) => {
    console.log('Running authentication...')
    let query = {username: req.body.username};
    connection((db) => {
        // Find user with username, they are unique
        db.collection('users').find(query).toArray().then((user) => {
            if (user.length == 0){
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
                            'username': req.body.username
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

router.post('/user/update/history', (req, res) => {
    let auth_token = req.headers['authorization'].slice(7);  // Removes 'Bearer ' from the header to get token
    let decoded = jwt.decode(auth_token);
    let username = (decoded.username);
    connection((db) => {
        db.collection('users')
        .update(
            {'username' : username},
            {$push: {'search_history': req.body}}
    )
        .then(() => {
            response.data = [];  
            response.message = "Successfully updated user search history";
            res.json(response);
        }).catch((err)=> {
            sendError(err,res);
        })
        db.close();
    });
});

module.exports = router;
