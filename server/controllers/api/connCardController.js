const connCardController = require('express').Router();

const db = require('../../models');

connCardController.post('/', (req, res) => {
    db.ConnCard.create(req.body)
    .then(cc => res.json(cc))
    .catch(err => res.json(err));
});

module.exports = connCardController;
