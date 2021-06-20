const mongoose = require('mongoose');
const {DB_URI} = require('./config');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(DB_URI, dbOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB connected!');
})

module.exports = db;
