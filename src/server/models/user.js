const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	sub: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	picture: {
		type: String,
		required: true
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
