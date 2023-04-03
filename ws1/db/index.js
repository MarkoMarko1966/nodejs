const mongoose = require('mongoose');

const init = () => {
    const den = 'mongodb+srv://MarkoM:MWN0oCqzD1uto1za@cluster0.nvf5nks.mongodb.net/?retryWrites=true&w=majority';
    mongoose.connect = (den);
};


module.exports = {
    init
};
