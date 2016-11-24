const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV || 'development';

app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('combined'));

const routes = require('./routes');
app.use(routes.index);

app.listen(port, () => {
	console.log(`Microblog running on port ${port}`);
});
