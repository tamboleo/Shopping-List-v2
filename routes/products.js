const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        console.log(product);
        res.json({success: true, data: product});
    } catch (error) {
        res.status(500).json({success: false, data: error});
    }
});

router.post('/', async (req, res) => {
    const product = new Product ({
        text: req.body.text
    });
    try {
        const savedProduct = await product.save();
        res.json({success: true, data: savedProduct});
    } catch (error) {
        res.status(500).json({success: false, data: error});
    }
});
module.exports = router;