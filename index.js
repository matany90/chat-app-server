const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  })

app.get('/', (req, res) => {
    res.send({ test: 'test'})
})

app.listen(PORT);