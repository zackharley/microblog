const mongoose = require('mongoose');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const database = process.env.MONGO_DATABASE;

mongoose.connect(`mongodb://${username}:${password}@${host}/${database}`);

const postSchema = new mongoose.Schema({
	title: String,
	author: String,
	body: String,
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = function posts(req, res) {
	const Post = mongoose.model('Post', postSchema);
	Post.find().then((error, data) => {
		mongoose.connection.close();
		res.send(error || data);
	});
};
