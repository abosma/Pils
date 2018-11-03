const scrape = require('./scrape');
const processData = require('./processData');
const beer = require('../models/beer');

const dbImport = async () => {
    var array = await scrape();
    var processedData = await processData(array.data);
    var BeerObject = await beer.create(processedData);

    console.log(`${processedData.length} document(s) inserted`);
};

module.exports = dbImport;
