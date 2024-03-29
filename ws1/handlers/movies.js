const movies = require('../movies');

const getAll = async (req, res) => {
    try{
        let data = await movies.getAll();
        res.send(data).status(200);
    } (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try{
        let data = await movies.getOne(req.params.id);
        res.send(data).status(200);
    } (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try{
        let data = req.body;
        await movies.create(data);
        res.send(data).status(201);
    } (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateOne = async (req, res) => {
    try{
        let id = req.params.id;
        let data = req.body;
        await movies.updateOne(id, data);
        res.send(data).status(204);
    } (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const partialUpdateOne = async (req, res) => {
    try{
        let id = req.params.id;
        let data = req.body;
        await movies.updateOne(id, data);
        res.send(data).status(204);
    } (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const deleteOne = async (req, res) => {
    try{
        await movies.remove(req.params.id);
        res.send('').status(204);
    } (err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const remove = async (id) => {
    return movies.deleteOne({_id: id});
}


module.exports = {
    getAll,
    getOne,
    create,
    updateOne,
    partialUpdateOne,
    deleteOne,
    remove
}
