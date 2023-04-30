const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Task = mongoose.model('Task', todoTaskSchema);

module.exports = Task;
