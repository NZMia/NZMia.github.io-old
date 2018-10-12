const express = require('express');
const encryption = require('utility');

const Router = express.Router();

const model = require('../db/models');
const user = model.getModel('user');

function setEncryption(pwd) {
	const salt = 'wanying@zhang_is_good!&&+16zwyj0203#~~~';
	return encryption.md5(encryption.md5(pwd+salt));
};

Router.get('/list', function (req, res) {
    user.find({}, function (err, doc) {
        return res.json(doc);
    });
});

Router.post('/login', function (req, res) {

	const { email, pwd, type } = req.body;

	user.findOne({email:email, pwd:setEncryption(pwd), type:type}, function(err, doc){

		if(!doc) {
			return res.json({code:1,msg:'Invalid user, please check the input data'})
		}
		return res.json({code:0,data:doc});
	})
});

Router.post('/register', function (req, res) {
    const { email, pwd, type, firstName, lastName } = req.body;

    user.findOne({email:email},function(err,doc) {

        if (doc) {

            return res.json({code:1,msg:'User exists'})

        } else  {
            user.create({email, pwd:setEncryption(pwd), type, firstName, lastName}, function (error) {
                if (error) {
                    return res.json({code: 1, msg: 'backend got wrong'})
                }
                return res.json({code: 0})
            })
        }

    });

});

Router.get('/info', function (req, res) {
    return res.json({ code: 1 })
});

module.exports = Router;
