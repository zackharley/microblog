module.exports = {
	dest: './uploads/',
	rename(fieldname, filename) {
		return filename;
	},
	onFileUploadStart(file) {
		console.log(`${file.originalname} is starting`);
	},
	onFileUploadComplete(file) {
		console.log(`${file.fieldname} uploaded to ${file.path}`);
	}
};
