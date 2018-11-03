const storeMapping = require('./storeMapping')
const uriPrettifier = require('./uriPrettifier')
const updateCounter = require('../routes/updateCounter')

const processData = async (data) => {
    var CounterObject = await updateCounter();

    for (let obj in data) {
        if (data[obj].rawUri) {
            data[obj].uri = uriPrettifier(data[obj].rawUri);
        }

        data[obj].store = storeMapping(data[obj].store);
        data[obj].counter = CounterObject.counter;
    }

    return data;
};

module.exports = processData
