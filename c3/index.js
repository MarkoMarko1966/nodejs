
// const {b, c, test_funkcija} = require('./text_convert.js');

// console.log(b);
// console.log(c);
// console.log(test_funkcija(50, 51));

// const test_funkcija = require('./text_convert');
// console.log(test_funkcija(20, 15));


const { firstLetterUpperCase , textStats } = require('./text_convert.js');

text1 ="zdravo svetu ova e samo test.";
console.log(firstLetterUpperCase(text1));

let primer_text = "Zdravo Zhivko. Kako si? Gledam deka te nema na predavanja. Si se zapushtil.";
console.log(textStats(primer_text));

