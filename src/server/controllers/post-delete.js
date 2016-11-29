const mongoose = require('mongoose');
const Post = require('./../models/post');

// Route - /post/add
module.exports = function postDelete(req, res, next) {

	Post.remove({_id: req.body._id}).then(data => {
			res.send(data);
		}).catch(error => {
			res.status(500).send(error);
		});
};
