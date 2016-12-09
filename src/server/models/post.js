const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	image: {
		data: Buffer,
		contentType: String
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
