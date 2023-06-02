const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World my name is jeff');
});

app.listen(3000 , () => console.log('Server listening on 3000 port.'));
