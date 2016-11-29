const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: String,
	author: String,
	body: String,
	date: {
		type: Date
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
