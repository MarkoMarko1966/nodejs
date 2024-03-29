const express = require('express');
const handlers = require('./handlers');

const app = express();

app.use(express.json());

app.get('/', handlers.home);
app.post('/home', handlers.home_post);
app.get('/calc/:operation', handlers.calculator_get);
app.post('/calc/:operation', handlers.calculator_post);

app.listen(8080, (err) => {
    if(err){
        return console.log(err);
    }

    console.log('Server successfully started...');
})