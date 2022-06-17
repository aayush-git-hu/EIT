var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'newuser',
	password: 'newuser',
	database: 'Hospital'
});

conn.connect(function(err) {
	if (err) throw err;
	console.log("Database connected");
	conn.query("CREATE TABLE `tablename`(id int, name varchar(20)) values (1,'name');", function(err,result) {
		if (err) throw err;
		console.log('Table created');
	});
});