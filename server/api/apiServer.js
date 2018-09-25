import Express from 'express';
import projectConfig from '../../configs/project.config';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const port = projectConfig.apiPort;
const app = new Express();

MongoClient.connect('mongodb://localhost:27017/blog', function (err, db) {

	if(err) throw err;
	app.use('/', require('./test'));
	console.log('connection aok');

});



