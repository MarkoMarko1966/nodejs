const express = require('express')
const db = require('./db');

db.init();

const api = express();
api.use(express.json());

api.use(jwt({
    algoritms: [HS256],
    secret: 'marko123'
}).unless({
    path: [
        'api/v1/auth/sign-up'
        'api/v1/auth/login'
        'api/v1/auth/forgot-password'
        'api/v1/auth/reset-password'
    ]
}));

api.post('api/v1/auth/sign-up', auth.signUP);
api.post('api/v1/auth/login', auth.login);

api.get('api/v1/profile', (req, res) => {
    try{    
        res.status(200).send('OK');
    }catch (err){
        console.log(err);
        return res.status(500).send('Internal Server error');
    }
});

api.use(function(err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send
    }
})





app.listen(10000, err =>{
    if(err) return console.log(err);

    console.log('Server succesfully started');
});