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
a = 10;
b = 11;
function testFn() {
    console.log('a: ', a);
    console.log('b: ', b);
    return 'Test fn initiated';
}

console.log(testFn(a, b));
let test_fn = testFn(a, b);
console.log(test_fn);

const testFn1 = () => {
    console.log('test fn 1 initiated. This is an arrow function');
}

testFn1();