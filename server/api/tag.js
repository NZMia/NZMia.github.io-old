const express = require('express');
const encryption = require('utility');

const Router = express.Router();

const model = require('../db/models');
const tag = model.getModel('tag');

const _filter = {'pwd':0, '__v':0};



module.exports = Router;
