process.env.NODE_ENV = 'test';

var base = process.env.PWD;
const MongoClient = require('mongodb').MongoClient;

var dbLocation = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';
var api = require(base + '/server/routes/api');
var testUtils = require(base + '/test/utils');
var should = require('should');

// Connect
const connection = (closure) => {
    return MongoClient.connect(dbLocation, (err, db) => {
        if (err) return console.log(err);
        console.log('Connected to database');
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
        // connect to DB
        connection((db) => {
            try{
                db.collection('users').insertOne(dummyUser)
                .then(function() {
                    console.log("Added dummy user " + dummyUser.username)
                })
            }catch (err){
                console.log("Error: " + err);
            }
            db.close();
            done();
        });
    })



    describe("Add new item", function() {
        var addedUser;
        it("should check if added user is in DB", function(done) {
            connection((db) => {
                db.collection('users')
                .find({"username": dummyUser.username})
                .toArray()
                .then((user) => {
                    addedUser = user;
                    console.log(user);
                    user[0].should.have.property('username');
                    user[0].username.should.equal('dummy@user.com');
                })
                .catch((err) => {
                    console.log("Error: " + err);
                })
                db.close();
            })

            done();
        });
    })



    // Teardown
5
    after(function(done) {
        connection((db) => {
            try{
                db.collection('users')
                .findOneAndDelete({"username": dummyUser.username})
                .then(function() {
                    console.log("Removed dummy user " + dummyUser.username)
                })
            }catch (err){
                console.log("Error: " + err);
            }
            db.close();
            done();
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
