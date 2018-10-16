const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	email: String,
	password: String,
	admin: Boolean
});

module.exports = mongoose.model('User', BookSchema);
