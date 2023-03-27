const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://MarkoM:MWN0oCqzD1uto1za@cluster0.nvf5nks.mongodb.net/?retryWrites=true&w=majority';

const connect = (connectionString) => {
    return mongoose.connect(connectionString);
}

const Users = mongooose.model(
    'users',
    {
        _id: String,
        name: String,
        Last_name: String,
        date_of_birth: Date
    },
    'users'
);

connect(connectionString);

(Users.findOne({}, (err, obj)=> {
    console.log(obj);
}));
