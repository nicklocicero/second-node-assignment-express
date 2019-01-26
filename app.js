const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  res.send('hi guys!');
})

app.use('/', (req, res, next) => {
  res.send('<h1>Main page, boy!</h1>')
})

app.listen(3000);