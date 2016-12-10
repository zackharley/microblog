const index = require('./routes/index');
const post = require('./routes/post');
const posts = require('./routes/posts');
const auth = require('./routes/auth');

module.exports = {
	index,
	post,
	posts,
	auth
};
