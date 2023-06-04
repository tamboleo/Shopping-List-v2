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

router.get('/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const product = await Product.findOne({text: name});
        console.log(product);
        res.json({success: true, data: product});
    } catch (error) {
        res.status(500).json({success: false, data: error});
    }
});
router.delete('/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const product = await Product.findOneAndDelete({text: name});
        console.log(product);
        res.json({success: true, data: {}});
    } catch (error) {
        res.status(500).json({success: false, data: error});
    }
});
router.post('/', async (req, res) => {
    console.log(req.body)
    const product = new Product ({
        text: req.body.text
    });
    try {
        const savedProduct = await product.save();
        res.json({success: true, data: savedProduct});
    } catch (error) {
        res.status(500).json({success: false, data: error});
        console.log(error);
    }
});
module.exports = router;