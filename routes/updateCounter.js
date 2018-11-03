const counter = require('../models/counter');

const updateCounter = async () => {
    var CounterInt = await counter.findOneAndUpdate({}, { $inc: { counter: 1 } }, { new: true, upsert: true, setDefaultsOnInsert: true });

    return CounterInt;
};

module.exports = updateCounter;
