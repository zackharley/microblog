module.exports = function posts(req, res) {
	// Query db for posts belonging to user
	res.send(`Getting posts for user ${req.params.user}`);
};
