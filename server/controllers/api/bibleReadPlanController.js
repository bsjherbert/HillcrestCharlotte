const bibleReadPlanController = require('express').Router();
const db = require('../../models');
bibleReadPlanController.get('/', (req, res) => {
    db.BibleReadingPlan.find({}).sort({weekNum:'desc'})
        .then(results => {
            res.json(results);
        })
        .catch(error => {
            if (error) throw error
        })
    });
    
    
bibleReadPlanController.get('/:week', (req, res) => {
    db.BibleReadingPlan.find({weekNum: req.params.week})
        .then(results => {
            res.json(results);
        })
        .catch(error => {
            if (error) throw error
        })

});

module.exports = bibleReadPlanController;