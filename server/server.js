const express = require('express');


const app = express();
const mongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://localhost:27017/blog';

mongoClient.connect(dbURL).then(client => {

	const db = client.db('blog');

	db.collection('test').insertOne({
		eId: 1,
		eName: 'Mia'
	});

	console.log('connected successfully');

	client.close();

}).catch(err => {

	console.log('error connecting to mongodb', err);
});

app.get('/', function (req, res) {
	res.send('<h2>server testderere</h2>');
});

app.get('/myData', function (req, res) {
	res.json({
		name: 'mia',
		type: 'develop',
		gender: 'female'
	})
});

app.listen(9091, function () {
	console.log('this port listening 9091');
});

