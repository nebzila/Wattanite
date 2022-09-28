const mongoose = require('mongoose');

const monConn = async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/Wattanite-DB');
	console.log(mongoose.connection.readyState);
};
module.exports = { mongoose, monConn };
