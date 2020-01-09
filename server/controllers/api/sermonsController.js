const sermonsController = require('express').Router();
const db = require('../../models');
const seedSermon = require('../../lib/seedSermons');


sermonsController.get('/', (req, res) => {
    db.Sermons.find({},{sermonDate:1, bookBible:1, title:1, speaker:1, _id:0}).sort( {sermonDate: -1, normalizedBook: 1})   
    .then(results => {
            res.json(results);
        })
        .catch(error => {
            if (error) throw error
        })
});

sermonsController.get('/latest', (req, res) => {
    // db.sermons.find({},{sermonDate:1, bookBible:1, title:1, speaker:1, _id:0})
 
     db.Sermons.findOne({}).sort( {sermonDate: -1, normalizedBook: 1})   
         .then(results => {
             res.json(results);
         })
         .catch(error => {
             if (error) throw error
         })
 });
 
sermonsController.get('/seedSermons', (req, res) => {

    seedSermon.forEach(seed => {
        // console.log(seed);
        db.Sermons.create(seed)
        .then(newSermon => console.log(newSermon))
        .catch(err => console.log(err))  
    });

    res.send("done seeding Sermons");
});

sermonsController.get('/:book', (req, res) => {

    db.Sermons.find({ normalizedBook: req.params.book.toLowerCase() })
        .then(results => {
            res.json(results);
        })
        .catch(error => {
            if (error) throw error
        })

});


module.exports = sermonsController;