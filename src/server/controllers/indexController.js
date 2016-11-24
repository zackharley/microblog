const path = require('path');

module.exports = function indexController(req, res) {
	res.sendFile(path.join(__dirname, '../views', 'index.html'));
};
