const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = global.Promise;

mongoose.connect(config.get('MONGODB_URI'), { useNewUrlParser: true });

module.exports = { mongoose };
