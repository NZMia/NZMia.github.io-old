const express = require('express');
const encryption = require('utility');

const Router = express.Router();

const model = require('../db/models');
const user = model.getModel('user');

const _filter = {'pwd':0, '__v':0};

function setEncryption(pwd) {
	const salt = 'wanying@zhang_is_good!&&+16zwyj0203#~~~';
	return encryption.md5(encryption.md5(pwd+salt));
};

Router.get('/list', function (req, res) {
    user.find({}, _filter, function (err, doc) {
        return res.json({code:0,data:doc});
    });
});

Router.post('/login', function (req, res) {

	const { email, pwd, type } = req.body;

	user.findOne({email:email, pwd:setEncryption(pwd), type:type}, _filter, function(err, doc){

		if(!doc) {
			return res.json({code:1,msg:'Invalid user, please check the input data'})
		}
		res.cookie('_userId', doc._id);
		return res.json({code:0,data:doc});
	})
});

Router.post('/register', function (req, res) {
    const { email, pwd, type, firstName, lastName } = req.body;
	const createdAt = new Date();
    user.findOne({email:email},function(err,doc) {

        if (doc) {

            return res.json({code:1,msg:'User exists'})

        } else  {
        	const newUser = new user({email, pwd:setEncryption(pwd), type, firstName, lastName, isActive:true, createdAt: createdAt});

	        newUser.save(function (error, doc) {
                if (error) {
                    return res.json({code: 1, msg: 'backend got wrong'})
                }
                const {email, type, _id} = doc;
	            res.cookie('_userId', _id);
                return res.json({code: 0, data:{email, type, _id}})
            })
        }

    });

});

Router.all('/info', function (req, res) {

	const userId = req.cookies._userId;

	if(!userId) {
		return res.json({ code: 1 })
	}

	user.findOne({_id:userId}, _filter, function (err, doc) {
		if(err) {
			return res.json({code:1, msg:'BE GOT ERROR'})
		}
		return res.json({code:0,data:doc});
	})

});

Router.post('/update', function (req, res) {

	const updateBy = req.cookies._userId;
	const updateAt =  new Date();
	const data = req.body;

	data['updatedAt'] = updateAt;
	data['updatedBy'] = updateBy;

	if (!updateBy) {
		return json.dumps({code: 1})
	}else {
		user.findByIdAndUpdate(data._id, {$set: data}, { new: true }, function (err,data) {

			if(err) {
				return res.json({code:1,msg:'Update failed: error comes from BE'})
			}
			return res.json({code:0,data});

		});
	}
});

module.exports = Router;
