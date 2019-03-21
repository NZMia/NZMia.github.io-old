const express = require('express');
const encryption = require('utility');

const Router = express.Router();

const model = require('../db/models');
const user = model.getModel('user');

const _filter = {'pwd': 0, '__v': 0};
const currentDate = new Date();

function setEncryption(pwd) {
	const salt = 'wanying@zhang_is_good!&&+16zwyj0203#~~~';
	return encryption.md5(encryption.md5(pwd+salt));
}

Router.post('/register', function (req, res) {

	const { email, pwd, type, firstName, lastName } = req.body;

	user.findOne({email: email}, function (err, doc) {
		if (doc) {
			return res.json({code:1, msg:'User exists'});
		}else {
			const newUser = new user({email, pwd:setEncryption(pwd), type, firstName, lastName, isActive:true, createdAt: currentDate});

			newUser.save(function (err, doc) {
				if (err) {

					return res.json({code: 1, msg: 'Data saved failed'});
				} else {

					res.cookie('_userId', doc._id);
					return res.json({code: 0, data: doc});
				}
			})
		}
	})

});

Router.post('/login', function (req, res) {

	const { email, pwd, type } = req.body;
	user.findOne({email:email, pwd:setEncryption(pwd), type:type}, _filter, function (err, doc) {

		if (!doc) {
			return res.json({code: 1, msg: 'Invalid email or password'});
		}

		res.cookie('_userId', doc._id);
		res.json({code: 0, data: doc});
	})
});

Router.get('/all', function(req, res) {
	user.find({}, _filter, function(err, docs) {
		if(!docs) {
			return res.json({code: 1, msg: err})
		}
		res.json({code: 0, data: docs})
	})
});

Router.all('/:id?', function (req, res) {

	const userId = typeof (req.params.id) != 'undefined' || req.params.id != null ?  req.params.id : req.cookies._userId;

	user.findOne({_id: userId}, _filter, function (err, doc) {

		if(!doc) {
			return res.json({code: 1})
		};

		res.json({code: 0, data: doc})
	})
});


module.exports = Router;
