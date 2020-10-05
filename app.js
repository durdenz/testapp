// require the mongoClient from mongoDB module
var MongoClient = require('mongodb').MongoClient;

// mongodb configs
var connectionUrl = 'mongodb://localhost:27017/myproject', 
	sampleCollection = 'chapters';

// We need to insert these chapters into MongoDB 
var	chapters = [{
	'Title': 'Snow Crash',
	'Author': 'Neal Stephenson'
},{
	'Title': 'Snow Crash',
	'Author': 'Neal Stephenson'
}];

MongoClient.connect(connectionUrl, function(err, client) {
	console.log("Connected Correctly to Server");
	// Get some collection
	var	db = client.db(sampleCollection);

	var collection = db.collection(sampleCollection);
	collection.insert(chapters, function(error, result) {
		// here result will contain an array of records inserted
		if(!error) {
			console.log("Success: "+result.ops.length+" Chapters inserted!");
		} else {
			console.log("Some error was encountered!");
		}
		client.close();
	});
});
