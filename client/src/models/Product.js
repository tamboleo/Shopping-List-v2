const mongoose = require('mongoose');

const Productschema = new mongoose.Schema({
    text: {
        type: String
    }
});

module.exports = mongoose.model('Product', Productschema);