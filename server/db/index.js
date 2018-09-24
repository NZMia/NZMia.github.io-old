const mongoDB = require('mongoose');
const dbURL = 'mongodb://localhost:27017/blog';
mongoDB.connect(dbURL, { useNewUrlParser: true });
mongoDB.set('useCreateIndex', true);

mongoDB.connection.on('connected', function () {

	console.log('mongo connect success');
});

module.exports = mongoDB;
