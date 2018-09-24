const express = require('express');
const Router = express.Router();

const model = require('../db/models');
const user = model.getModel('user');

const bodyParser = require('body-parser');

Router.use(bodyParser.urlencoded({ extended: false }));
Router.use(bodyParser.json());

Router.get('/list', function (req, res) {
	user.find({}, function (err, doc) {
		return res.json(doc);
	});
});

Router.post('/register', function (req, res) {
	const { email, pwd, type, firstName, lastName } = req.body;

	console.log("-------- user.js -----------");

	// console.log(req);
	console.log(req.body);

	console.log("----------end in user.js---------");

	res.json({
		status: 200
	})

});

Router.get('/info', function (req, res) {
	return res.json({ code: 1 })
});

module.exports = Router;
