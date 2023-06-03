const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const db = require('./config/db');
db();
const Product = require('./models/Product');
app.get('/', (req, res) => {
    res.send('Hello World my name is jeff, added 2');
});
const productsRouter = require('./routes/products')
app.use('/api/products', productsRouter);
app.listen(3000 , () => console.log('Server listening on 3000 port.'));