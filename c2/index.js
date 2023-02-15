// console.log('zdravo svetu');
// console.log(5!=5);
// console.log(typeof 25);

// const chovek = {
//     name: "John",
//     surname: "Doe"
// };

// console.log(chovek);
// a = 10;
// a = 12;
// console.log(a);
// const b = 15;
// console.log(b);

// let niza = [1, true, 2.5, 'zdravo'];
// console.log(niza);

// let student = {
//     ime: "Pero",
//     prezime: "Nakov",
//     vozrast: 25
// };

// console.log(student);

// student.prezime = "Perovski";

// student = {
//     prezime: "Perovski"
// };

// console.log(student);
// a = 10;
// b = 11;
// function testFn() {
//     console.log('a: ', a);
//     console.log('b: ', b);
//     return 'Test fn initiated';
// }

// console.log(testFn(a, b));
// let test_fn = testFn(a, b);
// console.log(test_fn);

// const testFn1 = () => {
//     console.log('test fn 1 initiated. This is an arrow function');
// }

// testFn1();

// const testFn2 = (b, a = 25) => {
//     return a + b;
// };

// console.log(testFn2(50))

// const testFn3 = (o = {}) => {
//     o.ime = "Zhivko";
//     console.log(o);
// }

// const s = {ime:"Zlate", prezime: "Zlatevski"};
// testFn3(s);
// s.ime = "Zhivko";
// console.log(s);

// let uchenik = {ime: "Marko", ocena: 4};
// let uchenik2 = uchenik;

// console.log(uchenik);
// uchenik.ime = "Vlado";
// console.log(uchenik);
// console.log(uchenik2);

// const convert = (type, value) => {
//     switch(type) {
//         case 'c2f':
//             return value * 9/5 + 32; 
//         case 'f2c':
//             return (value - 32) * 5/9;  
//         default:
//             console.log('cannot convert. The conversion type does not exist');
//             return;
//     }
// }

// let temp = 25;
// console.log(convert('c2f', temp));
// let res = convert('p2p', temp);
// console.log(res);

const student1 = {
    ime: "John",
    prezime: "Doe",
    ocenka: 4
};

const student2 = {
    ime: "Nikola",
    prezime: "Redmond",
    ocenka: 5
};

if (student1.ocenka > student2.ocenka) {
    console.log(`${student1.ime} ${student1.prezime} e podobar od ${student2.ime} ${student2.prezime}.`)
}
else if (student1.ocenka < student2.ocenka){
    console.log(`${student2.ime} ${student2.prezime} e podobar od ${student1.ime} ${student1.prezime}.`)
}
else {
    console.log (`${student1.ime} ${student1.prezime} ima isto znaenje kako i ${student2.ime} ${student2.prezime}.`)
};




