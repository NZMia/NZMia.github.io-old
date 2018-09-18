const express = require('express');
const mongoose = require('mongoose');

const app = express();
const dbURL = 'mongodb://localhost:27017/blog';

const userSchema = require('./models/user');
mongoose.connect(dbURL, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', function () {

	console.log('mongo connect success');
});
const User = mongoose.model('user', userSchema);

User.updateOne({'email':'nzmiazhang@gmail.com'},{'$set':{age: 18}},function(err,doc){
	console.log(doc)
});

app.get('/',function(req,res){
	res.send('<h1>Hello world</h1>')
});

app.get('/myAuth', function (req, res) {
	User.findOne({email: 'nzmiazhang@gmail.com'},function (err, doc) {
		res.json(doc)
	});
});

app.listen(9091, function () {
	console.log('this port listening 9091');
});

