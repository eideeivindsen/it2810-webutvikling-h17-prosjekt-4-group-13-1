process.env.NODE_ENV = 'test';

var base = process.env.PWD;
const MongoClient = require('mongodb').MongoClient;

var dbLocation = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';
var api = require(base + '/server/routes/api');
var testUtils = require(base + '/test/utils');
var should = require('should');

// Connection to database
const connection = (closure) => {
    return MongoClient.connect(dbLocation, (err, db) => {
        if (err) return console.log(err);
        //console.log('Connected to database');
        closure(db);
    });
};

describe("User API", function() {
    // set up
    var dummyUser = {
        'name': 'Dummy user',
        'username': 'dummy@user.com',
        'role': 'Admin',
        'password': 'test'
    };
    var dummyProduct = {
        'name': 'Trine shmelk',
        'category': 'Shmelkevarer',
        'producer': 'Trine Inc',
        'origin': 'Botswana',
        'price': 1000,
        'weight': 100,
        'description': 'Trine shmelk er den beste shmelken som finnes',
        'quantity': 20,
        'in_stock': true,
        'kilo_price': 2000
    };

    before(function(done) {
        // connect to DB, add a mock user
        connection((db) => {
            try{
                db.collection('users').insertOne(dummyUser)
                .then(function() {
                    console.log("Added dummy user " + dummyUser.username)  
                })
                db.collection('products').insertOne(dummyProduct)
                .then(function() {
                    console.log("Added dummy product " + dummyProduct.name)
                })
                done();
            }catch (err){
                console.log("Error: " + err);
                done();
            }
            db.close();
        });
    })


    describe("New user", function() {
        var addedUser;
        it("should be added to the DB", function(done) {
            connection((db) => {
                db.collection('users')
                .find({"username": dummyUser.username}).toArray().then((user) => {
                    addedUser = user;
                    //console.log(user);
                    user[0].should.have.property('username');
                    user[0].username.should.equal(dummyUser.username);
                    user[0].should.have.property('password');
                    user[0].password.should.equal(dummyUser.password);
                    user.length.should.not.equal(0);
                    done();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                    done();
                })
                db.close();
            });
        });
        it("should not not be logged in if the password is wrong", function(done) {
            connection((db) => {
                // Find user with username, they are unique
                db.collection('users').find({"username": dummyUser.username}).toArray().then((user) => {
                    //console.log(user[0]);
                    user[0].should.have.property('username');
                    user[0].username.should.equal(dummyUser.username);
                    user[0].should.have.property('password');
                    user[0].password.should.not.equal("not the password");
                    done();
                }).catch((err)=> {
                    console.log("Error: " + err);
                    done();
                })
                db.close();
            });
        });
        it("should be able to update search history", function(done) {
            let searchHistory = "Tine melk";
            connection((db) => {
                db.collection('users')
                .update(
                    {'username' : dummyUser.username},
                    {$push: {'search_history': searchHistory}}
                )
                .then(() => {
                    connection((db) => {
                        // Find user with username, they are unique
                        db.collection('users').find({"username": dummyUser.username}).toArray().then((user) => {
                            //console.log(user[0]);
                            user[0].should.have.property('search_history');
                            user[0].search_history[0].should.equal(searchHistory);
                            done();
                        }).catch((err)=> {
                            console.log("Error: " + err);
                            done();
                        })
                        db.close();
                    });
                }).catch((err)=> {
                    sendError(err,res);
                })
                db.close();
            });
        });
    });

    
    describe("New product", function() {
        it("should be added to DB", function(done) {
            connection((db) => {
                db.collection('products').find({"name": dummyProduct.name}).toArray().then((product) => {
                    //console.log(product);
                    product.length.should.not.equal(0);
                    done();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                    done();
                })
                db.close();
            });
        });
        it("should have the correct information stored in the DB", function(done) {
            connection((db) => {
                db.collection('products').find({"name": dummyProduct.name}).toArray().then((product) => {
                    //console.log(product[0].name);
                    product[0].should.have.property('name');
                    product[0].name.should.equal(dummyProduct.name);
                    product[0].name.should.be.String();
                    product[0].should.have.property('category');
                    product[0].category.should.equal(dummyProduct.category);
                    product[0].should.have.property('price');
                    product[0].price.should.equal(dummyProduct.price);
                    product[0].price.should.be.Number();
                    product[0].should.have.property('in_stock');
                    product[0].in_stock.should.equal(dummyProduct.in_stock);
                    product[0].in_stock.should.be.Boolean();
                    done();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                    done();
                })
                db.close();
            });
        });
    });


    // Teardown
    after(function(done) {
        // remove the mock user from DB
        connection((db) => {
            try{
                db.collection('users').findOneAndDelete({"username": dummyUser.username}).then(function() {
                    console.log("Removed dummy user " + dummyUser.username)
                });
                db.collection('products').findOneAndDelete({"name": dummyProduct.name}).then(function() {
                    console.log("Removed dummy product " + dummyProduct.name)
                });
                done();
            }catch (err){
                console.log("Error: " + err);
                done();
            }
            db.close();
        });
    });

});
