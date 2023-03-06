const node_fetch = require ('node-fetch');

(async () => {
    try{
        let response = await node_fetch.fetch('https.//wikipedia.org');
        let wikipediaContent = await response.text();
    }catch(err){
        console.log(err);
    }
})();