// const path = require('path');

// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(__filename.split("\\")[__filename.split("\\").length - 1]);


// console.log(path.dirname(__filename));
// console.log(__dirname);


// console.log(path.extname(__filename));

//all in one
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).ext);


//../c4/hello.html

// console.log(path.join(__dirname, 'test', 'hello.html'));

const fs = require('fs');
const path = require('path');

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, err =>{
            if(err) return fail(err);
            return success();
        });
    });
};

// fileWrite(path.join(__dirname, 'test', 'ocenki.txt'), '4, 5, 3, 2, 1, 5')
//     .then(() => {
//         console.log("SUCCESS!");
//         return fileWrite(path.join(__dirname, 'test', 'boi.txt'), 'crvena, zholta, zelena');
//     }).then(() => {
//         console.log("SUCCESS 2!!!");
//         return fileWrite(path.join(__dirname, 'test', 'boi2.txt'), 'plava, violetova, portokalova')
//     }).catch (err => {
//         console.log(err);
//     });


const fileRead = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) =>{
            if(err) return reject(err);
            return resolve(data);
        });
    });
};

// fileRead(path.join(__dirname, 'test', 'boi2.txt'))
//     .then((data) => {
//         console.log("uspesno");
//         console.log(data);
       
//     }).catch((err) = {
//         console.log("neuspesno");
//         console.log(err);
//     });

// (async () => {
//     try {
//         let ocenki = await fileRead(path.join(__dirname, 'test', 'ocenki.txt'));
//         console.log("ocenki: ", ocenki);
//     } catch (err){
//         console.log(err);
//     }
// })();

let imenik = [
    {ime: 'Zlate Zlatevski', telefon: 555666},
    {ime: 'Pero Perovski', telefon: 555363},
    {ime: 'Marko Markovski', telefon: 555154}
];

(async () => {
    try {
        let imenikData = JSON.stringify(imenik); //convert object to string
        console.log(imenikData);
        await fileWrite(path.join(__dirname, 'test1', 'imenik.txt'), imenikData);
        let dataString = await fileRead(path.join(__dirname, 'test1', 'imenik.txt'));
        let data = JSON.parse(dataString); //convert string to object
        console.log(data);
    }catch(err) {
        console.log(err);
    }
})();

