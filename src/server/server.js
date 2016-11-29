const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('./controllers/cors');
const db = require('./db');

const app = express();
const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV || 'development';

app.use(express.static(path.join(__dirname, '../public')));
app.use(cors); // enable cross-origin resource sharing

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes');
app.use(routes.index);
app.use(routes.post);
app.use(routes.posts);

app.listen(port, () => {
	console.log(`Microblog running on port ${port}`);
});
