/* https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp */
/* Code credited W3Schools for adding documents to mongodb collections */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = 
    {none: ""};
  db.collection("descriptive_data").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});