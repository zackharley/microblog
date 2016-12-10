const mongoose = require('mongoose');
const {username, password, host, database} = require('./config/db.config');

const uri = `mongodb://${username}:${password}@${host}/${database}`;

mongoose.connect(uri);

mongoose.connection.on('connected', () => {
	console.log(`We're connected on ${uri}`);
});

mongoose.connection.on('error', error => {
	console.error(error);
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose connection terminated!');
});

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose default connection disconnected through app termination');
    	process.exit(0);
	});
});
