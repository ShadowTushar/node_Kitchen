const mongoose = require('mongoose');

//Create Person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['Chef', 'Waiter', 'Manager'],
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    salary: {
        type: String,
        required: true,
    }
})


//Create Person Model
const Person = mongoose.model('Person', personSchema)
module.exports = Person