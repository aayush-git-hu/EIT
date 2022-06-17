var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err, db) {
	if(err) throw err;
	console.log("database connected....");

	// var dbo = db.db('mydb');
	// var record1 = { name: "John", age: 12};
	// dbo.collection('customers').insertOne(record1, function(err,res) {
	// 	if(err) throw err;
	// 	console.log('record1 successfully inserted');
	// 	db.close();		
	// });

	var dbo = db.db('mydb');
	var records = [ { name: "John", age: 12},
					{ name: "Peter"} ];

	dbo.collection('customers').insertMany(records, function(err,res) {
		if(err) throw err;
		console.log(res.insertedCount + ' record successfully inserted');
		db.close();		
	});
});