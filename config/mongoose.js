const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://itsprincecse:12345@cluster0.o7vhesl.mongodb.net/');

mongoose.connect('mongodb://localhost:27017/codeial_development')
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting th mongoDB'));

db.once('open', function(){
    console.log('connected to Database :: MongoDB');
});

module.exports = db;