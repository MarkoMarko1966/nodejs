const mongoose = require('mongoose');

const Movie = mongooose.model(
    'movie',
    {
        title: String,
        year: Number
    },
    'movies'
);

const create = async (req,res) => {
    let movie = new Movie(data);
    return movie.save();
};

const getAll = async () => {
    return Movie.find({});
};

const getOne = async (id) => {
    return Movie.findOne({_id: id});
};

const updateOne = async (id, date) => {
    return Movie.updateOne({_id: id}, data);
};

const partialUpdateOne = async (id, date) => {
    return Movie.partialUpdateOne({_id: id}, data);
};

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    partialUpdateOne
}


