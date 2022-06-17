var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db) {
	if (err) throw err;
	console.log("Databse connected...");

	var dbo = db.db('mydb');
	dbo.collection('customers').find().sort({ name:-1 }).toArray(function(err,result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});

	// dbo.collection('customers').findOne({}, function(err,result) {
	// 	if (err) throw err;
	// 	console.log(result);
	// 	db.close();
	// });
});