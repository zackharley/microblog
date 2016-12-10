const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
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
	},
	body: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	image: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
