var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//The handle to the Recipes model
var Recipes = require('../models/recipes');

var recipeRouter = express.Router();
recipeRouter.use(bodyParser.json());

recipeRouter.route('/')
    .get(function (req, res, next) {
        //Get all the recipes
        Recipes.find({}, function (err, recipes) {
            if (err) {
                throw err;
            }
            res.json(recipes);
        });
    })
    .post(function (req, res, next) {
        console.log('req.body ' + JSON.stringify(req.body));
        //Add a new Recipe
        Recipes.create(req.body, function (err, recipe) {
            if (err) {
                console.log('Error in adding the Recipe' + req.body);
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Failed to add the recipe');
                //throw err;
            } else {
                console.log('Recipe created!');
                var id = recipe._id;

                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Added the recipe with id: ' + id);
            }
        });
    })
    .put(function (req, res, next) {
        //find a recipe using recipe id and update the reuest body
        console.log('req.body main ' + JSON.stringify(req.body))
        Recipes.findByIdAndUpdate(req.params.recipeId, {
            $set: req.body
        }, {
            new: true
        }, function (err, recipe) {
            if (err) {
                console.log('Error in updating the Recipe' + req.body);
                throw err;
            }
            res.json(recipe);
        });
    })
    .delete(function (req, res, next) {
        Recipes.remove({}, function (err, resp) {
            if (err) {
                throw err;
            }
            res.json(resp);
        });
    });

recipeRouter.route('/:recipeId')
    .get(function (req, res, next) {
        console.log('req.body ' + JSON.stringify(req.body));
        Recipes.findById(req.params.recipeId, function (err, recipe) {
            if (err) {
                throw err;
            }
            res.json(recipe);
        });
    })
    .put(function (req, res, next) {
        //find a recipe using recipe id and update the reuest body
        console.log('req.body ' + JSON.stringify(req.body))
        Recipes.findByIdAndUpdate(req.params.recipeId, {
            $set: req.body
        }, {
            new: true
        }, function (err, recipe) {
            if (err) {
                console.log('Error in updating the Recipe' + req.body);
                throw err;
            }
            res.json(recipe);
        });
    })
    .delete(function (req, res, next) {
        Recipes.findByIdAndRemove(req.params.recipeId, function (err, resp) {
            if (err) {
                throw err;
            }
            res.json(resp);
        });
    });
/*
recipeRouter.route('/:recipeId/comments')
    .get(function (req, res, next) {
        Recipes.findById(req.params.recipeId, function (err, recipe) {
            if (err) {
                throw err;
            }
            res.json(recipe.comments);
        });
    })
    .post(function (req, res, next) {
        Recipes.findById(req.params.recipeId, function (err, recipe) {
            if (err) {
                throw err;
            }
            recipe.comments.push(req.body);
            recipe.save(function (err, recipe) {
                if (err) {
                    throw err;
                }
                console.log('Updated Comments!');
                res.json(recipe);
            });
        });
    })
    .delete(function (req, res, next) {
        Recipes.findById(req.params.recipeId, function (err, recipe) {
            if (err) {
                throw err;
            }
            for (var i = (recipe.comments.length - 1); i >= 0; i--) {
                recipe.comments.id(recipe.comments[i]._id).remove();
            }
            recipe.save(function (err, result) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Deleted all comments!');
            });
        });
    });

recipeRouter.route('/:recipeId/comments/:commentId')
    .get(function (req, res, next) {
        Recipes.findById(req.params.recipeId, function (err, recipe) {
            if (err) throw err;
            res.json(recipe.comments.id(req.params.commentId));
        });
    })
    .put(function (req, res, next) {
        // We delete the existing commment and insert the updated
        // comment as a new comment
        Recipes.findById(req.params.recipeId, function (err, recipe) {
            if (err) throw err;
            recipe.comments.id(req.params.commentId).remove();
            recipe.comments.push(req.body);
            recipe.save(function (err, recipe) {
                if (err) throw err;
                console.log('Updated Comments!');
                res.json(recipe);
            });
        });
    })
    .delete(function (req, res, next) {
        Recipes.findById(req.params.recipeId, function (err, recipe) {
            recipe.comments.id(req.params.commentId).remove();
            recipe.save(function (err, resp) {
                if (err) throw err;
                res.json(resp);
            });
        });
    });*/

module.exports = recipeRouter;
