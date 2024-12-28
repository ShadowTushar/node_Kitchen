const mongoose = require('mongoose')
const mongoURL = 'mongodb://localhost:27017/Kitchen'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB Server ');
})

db.on('error', (err) => {
    console.log('MongoDB Connection Error: ', err);
})

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
})

module.exports = db;