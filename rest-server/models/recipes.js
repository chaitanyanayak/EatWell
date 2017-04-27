// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var instructionSchema = new Schema({
    sequence: {
        type: Number,
        required: true
    },
    instruction: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var ingredientSchema = new Schema({
    ingredient: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// create a schema
var recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    servingsize: {
        type: String
    },
    instructions: [instructionSchema],
    ingredients: [ingredientSchema]
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
//The collection name in MongoDB will be plural of the name specified
//a collection 'Recipes' will be created corresponding to name 'Recipe'
var Recipes = mongoose.model('Recipe', recipeSchema);

// make this available to our Node applications
module.exports = Recipes;
