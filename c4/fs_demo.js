const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test1'), {}, err => {
//     if(err) throw err;
//     console.log('Folder is created!');
// });

// fs.writeFile(path.join(__dirname, 'test1', 'hello.txt'), 'Hello World!!!', err => {
//     if(err) throw err;
//     console.log('File was created and was written into...');
// })

// fs.appendFile(path.join(__dirname, 'test1', 'hello.txt'), ' I love node.js!!!', err => {
//     if(err) throw err;
//     console.log('File was appended to...');
// })

// fs.readFile(path.join(__dirname,'test1', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

fs.rename(path.join(__dirname, 'test1', 'hello.txt'), path.join(__dirname, 'test1', 'hello_preimenuvan.txt'), err =>{
    if(err) throw err;
    console.log('The file has been renamed...');
});