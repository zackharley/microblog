const mongoose = require('mongoose');
const Post = require('./../models/post');

// Route - /post/add
module.exports = function postAdd(req, res, next) {

	const post = new Post(req.body);

	post.save().then(data => {
			res.send(data);
		}).catch(error => {
			res.status(500).send(error);
		});

};
