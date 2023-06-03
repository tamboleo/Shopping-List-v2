const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);