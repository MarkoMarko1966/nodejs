const mongoose = require('mongoose');

const User = mongoose.model(
    'user',
    {
        name: String,
        surname: String,
        books: String
    }
    'users'
);

const create = async (data) => {
    let user = new User(data);
    return user.save();
};

const getUserBySurname = async (surname) => {
    return User.findOne{{surname}};
};

module.exports = {
    create,
    getUserBySurname
};
