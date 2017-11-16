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
    before(function(done) {
        // connect to DB, add a mock user
        connection((db) => {
            try{
                db.collection('users').insertOne(dummyUser)
                .then(function() {
                    console.log("Added dummy user " + dummyUser.username)
                    done();
                })
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
                .find({"username": dummyUser.username})
                .toArray()
                .then((user) => {
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
            })
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



    // Teardown
    after(function(done) {
        // remove the mock user from DB
        connection((db) => {
            try{
                db.collection('users')
                .findOneAndDelete({"username": dummyUser.username})
                .then(function() {
                    console.log("Removed dummy user " + dummyUser.username)
                    done();
                })
            }catch (err){
                console.log("Error: " + err);
                done();
            }
            db.close();
        });
    })

    // describe("Add new item", function() {
    //     it("should add new item as admin", function(done) {
    //         var req = {
    //             body: {
    //                 'product': 'Tine melk',
    //                 'price': '15'
    //             }
    //         };
    //         // test
    //         var res = testUtils.responseValidator(200, function(item) {
    //             item.should.have.property('product');
    //             item.product.should.equal('Tine melk');
    //             item.should.have.property('price');
    //             item.product.should.equal('15');
    //         });

    //         // TODO: add to database
    //     })
    // })

});
