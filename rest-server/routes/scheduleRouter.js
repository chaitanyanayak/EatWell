var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//The handle to the Schedule model
var Schedule = require('../models/schedule');

var scheduleRouter = express.Router();
scheduleRouter.use(bodyParser.json());

scheduleRouter.route('/')
    .get(function (req, res, next) {
        //Get all the schedule
        Schedule.find({}, function (err, schedule) {
                if (err) {
                    throw err;
                }
                res.json(schedule);
            })
            .populate('breakfast lunch dinner snacks')
            .exec();
    })
    .post(function (req, res, next) {
        console.log('scheduleRouter.post: req.body ' + JSON.stringify(req.body));
        //Add a new Recipe
        Schedule.create(req.body, function (err, schedule) {
            if (err) {
                console.log('Error in adding the Schedule' + req.body);
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Failed to add the Schedule');
                //throw err;
            } else {
                console.log('Schedule created!');
                var id = schedule._id;

                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Added the Schedule with id: ' + id);
            }
        });
    });

scheduleRouter.route('/:scheduleId')
    .get(function (req, res, next) {
        console.log('scheduleRouter.put req.body ' + req.params.scheduleId + JSON.stringify(req.body));
        Schedule.findById(req.params.scheduleId, function (err, schedule) {
            if (err) {
                throw err;
            }
            res.json(schedule);
        });
    })
    .put(function (req, res, next) {
        //find a Schedule using Schedule id and update the reuest body
        console.log('req.body ' + JSON.stringify(req.body))
        Schedule.findByIdAndUpdate(req.params.scheduleId, {
            $set: req.body
        }, {
            new: true
        }, function (err, schedule) {
            if (err) {
                console.log('Error in updating the Schedule' + req.body);
                throw err;
            }
            res.json(schedule);
        });
    })
    .delete(function (req, res, next) {
        Schedule.findByIdAndRemove(req.params.scheduleId, function (err, resp) {
            if (err) {
                throw err;
            }
            res.json(resp);
        });
    });

module.exports = scheduleRouter;
