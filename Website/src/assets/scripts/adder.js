/* https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp */
/* Code credited W3Schools for adding documents to mongodb collections */

var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/warewolf';
//var url = 'mongodb://webdev-4:turtleneck2017@ds241055.mlab.com:41055/webdev-4';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    {name: "Lettmelk", category: "Dairy", producer: "Tine", weight: 1.06,
    price: 24.00, kilo_price: 0, in_stock: true, quantity: 500,
    desc: "Milk from norwegian cows"},
    {name: "Norvegia", category: "Dairy", producer: "Tine", weight: 1.2,
    price: 91.08, kilo_price: 75.90, in_stock: true, quantity: 140,
    desc: "Top quality norwegian cheese"},
    {name: "Coca Cola", category: "Beverages", producer: "Coca Cola", weight: 0.5,
    price: 20, kilo_price: 40, in_stock: true, quantity: 1243,
    desc: "The world famous soda"},
    {name: "Casa Di Mama", category: "Frozen foods", producer: "Dr. Oetker", weight: 0.420,
    price: 39, kilo_price: 92.86, in_stock: true, quantity: 136,
    desc: "A pizza for the meat lover!"},
    {name: "Tomatsuppe", category: "Dry foods", producer: "Toro", weight: 0.100,
    price: 18, kilo_price: 180, in_stock: true, quantity: 4500,
    desc: "Everyone's favorite tomato soup"},
    {name: "Kjøttdeig", category: "Meat", producer: "Gilde", weight: 0.40,
    price: 36, kilo_price: 90, in_stock: true, quantity: 7000,
    desc: "96% norwegian beef"},
  ];
  db.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});