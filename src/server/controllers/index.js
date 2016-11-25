const path = require('path');

module.exports = function index(req, res) {
	res.sendFile(path.join(__dirname, '../views', 'index.html'));
};
