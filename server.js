'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.static('./public'));
app.get('/hello', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/data', (req, res) => {
    let airplanes = {
        departure: Date.now(),
        canFly: true,
        pilot: 'Well Trained'
    }

    res.status(200).json(airplanes);
})

app.get('/', (req, res) => {
    res.status(200).redirect('index.html');
})

app.use('*', (req, res) => {
    res.send('Sorry, that route does not exist');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));