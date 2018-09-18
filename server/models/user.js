const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, require: true, unique: true},
	firstName: {type: String, require: true},
	lastName: {type: String, require: true},
	age:{type: Number}
});

module.exports = userSchema;
