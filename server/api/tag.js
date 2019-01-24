const express = require('express');
const Router = express.Router();
const model = require('../db/models');
const tag = model.getModel('tag');

const _filter = {'__v':0};
const currentDate = new Date();

Router.post('/update/:name?', function(req, res) {
    const _id = req.body._id;
    tag.findByIdAndUpdate({_id: _id}, { $set: { isActive: false }},  _filter, function(err, doc) {
        if(err) return res.json({code: 1, msg: 'update failed'});
        res.json({code: 0, data: doc})
    })
});

Router.post('/:name?', function(req,res) {
    const _id = req.body._id;
    const _name = req.body.name;
    const _updatedBy = req.body.authUser;

    tag.findOne({_id: _id}, _filter, function(err, doc){
        if(doc) {
            if(doc.isActive) return res.json({code: 1, msg: 'Tag exists'});
            doc.isActive = true;
            doc.save(function(err, doc) {
                return err ? res.json({code: 1, msg: 'exits tag updated failed'}) : res.json({code: 0, data: doc})
            })
        }else {
            const newTag = new tag({name:_name, isActive:true, createdAt:currentDate, updatedBy:_updatedBy});
            newTag.save(function(err, doc){
                err ? res.json({code: 1, msg: 'Tag created filed pls check backend'}) : res.json({code: 0, data: doc})
            })
        }
    })
});

Router.get('/list', function(req, res) {

    tag.find({},_filter, function(err, doc){
        if(err) return res.json({code: 1, msg: 'Loging...(That means get error)'});
        return err ? res.json({code: 1, msg: 'Loging...(That means get error)'}) : res.json({code: 0, data: doc})
    })
});

module.exports = Router;

