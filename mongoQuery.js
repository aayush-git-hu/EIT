var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err,db) {
	if (err) throw err;
	console.log("Database connected...");

	var dbo = db.db('mydb');
	dbo.collection('customers').find({name:"Peter"}).toArray(function(err,result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});
});