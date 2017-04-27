// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Recipes = require('./recipes');

var mealSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var scheduleSchema = new Schema({
    day: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String
    },
    breakfast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    lunch: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    dinner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    snacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
//The collection name in MongoDB will be plural of the name specified
//a collection 'Recipes' will be created corresponding to name 'Recipe'
var Schedule = mongoose.model('Schedule', scheduleSchema);

// make this available to our Node applications
module.exports = Schedule;
