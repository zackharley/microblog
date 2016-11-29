const mongoose = require('mongoose');
const Post = require('./../models/post');

module.exports = function posts(req, res) {

	Post.find().sort({date: -1}).then((error, data) => {
		res.send(error || data);
	});
};
