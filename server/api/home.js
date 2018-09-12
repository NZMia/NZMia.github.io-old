import Express from 'express';
import Mongodb from 'mongodb';

const router = Express.Router();
const mongoClient = Mongodb.MongoClient;
const dbURL = 'mongodb://localhost:27017/local';


router.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>');
});

router.use('/data',(req, res)=> {

	res.send('Hello World!');
	// mongoClient.connect(dbURL).then(client => {
	//
	// 	const db = client.db('blog');
	//
	// 	// db.collection('test').insertOne({
	// 	// 	eId: 1,
	// 	// 	eName: 'Mia'
	// 	// });
	//
	// 	console.log('connected successfully');
	//
	// 	client.close();
	//
	// }).catch(err => {
	//
	// 	console.log('error connecting to mongodb', err);
	// });
});

module.exports = router;
