const express = require('express');
const encryption = require('utility');

const Router = express.Router();

const model = require('../db/models');
const tag = model.getModel('tag');

const _filter = {'__v':0};
const currentDate = new Date();

Router.post('/:type?', function(req,res) {
    const _name = req.body.name;
    const _updatedBy = req.body.authUser;

    tag.findOne({name: _name}, _filter, function(err, doc){
       
        if(doc) {
            return res.json({code: 1, msg: 'Tag exists'});
        }else {
            const newTag = new tag({name:_name, isActive:true, createdAt:currentDate, updatedBy:_updatedBy});
            newTag.save(function(err, doc){
                err ? res.json({code: 1, msg: 'Tag created filed pls check backend'}) : res.json({code: 0, data: doc})
            })
        }
    })
})


module.exports = Router;
