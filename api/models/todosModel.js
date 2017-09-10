'use strict';
var mongoose = require("mongoose");
var schema = mongoose.Schema;

var taskSchema = new schema({
    name: {
        type: String,
        Required: 'A task name is required'
    },
    created:{
        type: Date,
        default: Date.now
    },
    status:{
        type:[{
            type: String,
            enum: ['not started', 'in-progress', 'completed']
        }],
        default: ['not started']
    }
});

module.exports = mongoose.model('Tasks', taskSchema);