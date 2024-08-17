var http = require('http');
var Mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
console.log('create data base')

});
//   var theid= new Mongo.ObjectID("59997ecec80f5f285e5fd949");
//   db.collection("customers").findOne({'_id':theid}, function(err, result) {
//     if (err) throw err;
          
//     console.log(result);
//     db.close();
//   });
// });


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collection("customers").find({}, { _id: false, name: true, address: true }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collection("customers").find({}, { _id: false }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//
//       console.log(result[2].address);
//
//       db.close();
//     });
//   });