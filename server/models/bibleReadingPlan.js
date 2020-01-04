const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BibleReadingPlanSchema = new Schema({

    weekNum: { type: Number, min: 1, max: 52 },
    dailyVerses: [String],
    memoryVerses: [String]
    });

let BibleReadingPlan = mongoose.model('BibleReadingPlan', BibleReadingPlanSchema);

module.exports = BibleReadingPlan;
