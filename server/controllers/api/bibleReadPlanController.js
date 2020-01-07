const bibleReadPlanController = require('express').Router();
const db = require('../../models');
const seedData = require('../../lib/seedData');

bibleReadPlanController.get('/', (req, res) => {
    db.BibleReadingPlan.find({}).sort({ weekNum: 'desc' })
        .then(results => {
            res.json(results);
        })
        .catch(error => {
            if (error) throw error
        })
});

bibleReadPlanController.get('/seed', (req, res) => {
    seedData.forEach(seed => {
         console.log(seed);
        db.BibleReadingPlan.create(seed)
        .then(newPlan => console.log(newPlan))
        .catch(err => console.log(err))  
    });

    res.send("done");
});


bibleReadPlanController.get('/:week', (req, res) => {
    db.BibleReadingPlan.find({ weekNum: req.params.week })
        .then(results => {
            res.json(results);
        })
        .catch(error => {
            if (error) throw error
        })

});

module.exports = bibleReadPlanController;