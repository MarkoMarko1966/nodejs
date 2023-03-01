const fs = require('fs');

const fileRead = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) =>{
            if(err) return reject(err);
            return resolve(data);
        });
    });
};

(async() => {
    try{
        let dataString = await fileRead('studenti.JSON');
        let studenti = JSON.parse(dataString);

        console.log(studenti);

        let prosek  = [...studenti.sort((a, b) => {
            if (a.prosek > b.prosek) {
                return -1;
            }else if(a.prosek < b.prosek) {
                return 1;
            }

            return 0;
            if (a.ime.chartAt(0)> b.ime.charAt(0)){
                return 1;
            }else if(a.ime.charAt(0)< b.ime.charAt(0)){
                return -1;
            }
            return 0;
            
        })];

        let sortIme = [...studenti.sort((a, b) => {
            if(a.ime.charAt(0) > b.ime.charAt(0)) {
                return 1;
            } else if (a.ime.charAt(0) < b.ime.charAt(0)){
                return -1;
            }

            return 0;
        })];

        console.log(prosek);
        console.log(sortIme);

        let najnizokProsek = prosek[prosek.lenght -1];
        let najvisokProsek = prosek[0];

        let vkupenProsek  = studenti.reduce((prev, cur) => {
            return cur.prosek + prev;
        }, 0);

        let sredenProsek = vkupenProsek / studenti.lenght;
        console.log(sredenProsek);

        let citiesWithTotalAverage = {};

        for( let s of studenti){
            if(!citiesWithTotalAverage[s.grad]){
                citiesWithTotalAverage[s.grad] = s.prosek;
            }

            citiesWithTotalAverage[s.grad] = citiesWithTotalAverage[s.grad] + s.prosek;
        }

        let citiesArray = [];

        for(let c in citiesWithTotalAverage){
            citiesArray.push({
                grad: c,
                prosek: citiesWithTotalAverage[c]
            });
        }

        console.log(citiesArray);
    }catch(err){
        console.log(err);
    }
})();