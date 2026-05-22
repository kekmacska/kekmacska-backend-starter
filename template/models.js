const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    /** @type {mongoose.SchemaDefinitionProperty} */
    _id: {

    }
});

module.exports.Thing = mongoose.model('Thing', thingSchema, 'things');