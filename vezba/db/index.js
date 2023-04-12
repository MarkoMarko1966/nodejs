const mongoose = require('mongoose');

const init = () =>{
    const dsn = 'mongodb+srv://MarkoM:<MWN0oCqzD1uto1za>@cluster0.nvf5nks.mongodb.net/test'
    mongoose.connect(dsn);
};

module.exports = {
    init
};