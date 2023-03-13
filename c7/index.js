// let operacija = 'minus';

// if(operacija == 'minus'){
//     console.log('odzemanje');
// } else if (operacija == 'plus'){
//     console.log('dodavanje');
// }else if (operacija == 'mnozenje'){
//     console.log('mnozenje');
// }else if (operacija == 'delenje'){
//     console.log('delenje');
// }

// switch(operacija){
//     case 'plus':
//         console.log('dodavanje');
//         break;
//     case 'minus':
//         console.log('odzemanje');
//         break;
//     case 'mnozenje':
//         console.log('mnozenje');
//         break;
//     case 'delenje':
//         console.log('delenje');
//         break;
// }

// let result = {
//     plus: () => {
//         console.log('dodavanje');
//         return 'ovaa operacija e dodavanje';
//     },
//     minus: () => {
//         console.log('odzemanje');
//         return 'ovaa operacija e odzemanje';
//     },
//     mnozenje: () => {
//         console.log('mnozenje');
//     },
//     delenje: () => {
//         console.log('delenje');
//     }
// }

// let rezultat = result[operacija];
// rezultat();

// const student = {
//     ime: 'Pero',
//     prezime: 'Perovski',
//     'horoskopski znak': 'vodolija',
//     apsolvent: false,
//     godina_na_studii: 10,
//     akcija: () => {
//         console.log('Kaj si be Pero be?');
//         return 'PEROOO!!!';
//     }
// };

// console.log(student.ime, student['ime']);

// let prop = 'prezime';
// console.log(student[prop], student.prop); //student['prezime']

// console.log(student['horoskopski znak']);
// console.log(student.apsolvent);
// console.log(student.godina_na_studii);
// console.log(student.akcija());


// let text = 'Zdravo ja sum Marko i ova e 7mi cas.';
// let zbor = 'zdravo';

// let rezultat = text.toLowerCase().search('zdravo'); //rezultat = 0;
// if(rezultat === false){
//     console.log('zborot ne e najden vo tekstot');
// } else {
//     console.log('pozicijata na koja se naogja zborot vo stringot e ' + rezultat);
// }

const fs = require('fs');
const http = require('http');
const url = require('url');
// const server = require ('./server.js');

const fileRead = (filename) => {
    return new Promise((succes, fail) => {
        fs.readFile(filename, 'utf8', (err, data) =>{
            if(err) return fail(err);
            return succes(data);
        });
    });
};

const render = async (page, data) => {
    let content = await fileRead(`./${page}.html`);
    return content.replace('{{res}}', data);
};


const pages = {
    '/home': (req, res) => {
        res.end("HOME");
    },

    '/users': (req, res) => {
        res.end('USERS');
    },

    '/plus': async(req, res) => {
        let result = `${Number(req.query.a) + Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/minus':async(req, res) => {
        let result = `${Number(req.query.a) - Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/delenje':async(req, res) => {
        let result = `${Number(req.query.a) / Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/mnozenje':async(req, res) => {
        let result = `${Number(req.query.a) * Number(req.query.b)}`;
        res.end(await render('index', result));
    }
}

const server = http.createServer((req, res) => {
    let [path,_] = req.url.split('?');
    if (pages[path]){
        const query_string = url.parse(req.url, true).query;
        req.query = query_string;
        pages[path](req, res);
    } else {
        res.writeHead(404, 'NOT FOUND');
        res.end('THIS PAGE DOES NOT EXIST');
    }
    // console.log(path);
    // console.log('test');
    // console.log(req.url);
    // console.log(url.parse(req.url, true). query);
});

console.log('Server started.....');
server.listen(8080);
