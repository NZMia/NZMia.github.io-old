const express = require('express');
const Router = express.Router();

const model = require('../db/models');
const user = model.getModel('user');

Router.get('/list', function (req,res) {
	user.find({}, function (err, doc) {
		return res.json(doc);
	});
});

Router.post('/register', function (req, res) {
	const {email, pwd, type, firstName, lastName} = req.body;

	console.log("-------------------");

	console.log(req);
	console.log(req.body);

	console.log("-------------------");

});

Router.get('/info',function (req,res) {
	return res.json({code:1})
});

module.exports = Router;
