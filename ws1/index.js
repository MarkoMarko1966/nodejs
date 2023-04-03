const express = require('express');
const movies = require('./movies');
const db = require('./db');

db.init();

const app = express();

 app.use(express.json());

 app.get('/movies/:id', movies.getOne);
 app.get('/moves', movies.getAll);
 app.post('/moves', movies.create);
 app.put('/moves', movies.updateOne);
 app.get('/moves', movies.partialUpdateOne);
 app.put('/movies/:id', movies.updateOne);
 app.patch('/movies/:id', movies.partialUpdateOne);

 app.get('/movies/.id', movies.getOne);

 app.listen(8080, err => {
    if (err) return console.log(err);

    console.log('Successfully started server...');
 });