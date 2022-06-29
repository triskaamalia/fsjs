
const luas = (p, r, s) => {
    let hasil = p * (r + s);
    return hasil;
};
const selimut = (p, r, s) => {
    let hasil = p * r * s;
    return hasil;
};
const alas = (p, r) => {
    let hasil = p * (r * r);
    return hasil;
};
const volume = (p, r, t) => {
    let hasil = 1 / 3 * p * (r * r) * t;
    return hasil;
};
console.log(luas(3.14, 3, 10));
console.log(selimut(3.14, 3, 10));
console.log(alas(3.14, 3));
console.log(volume(3.14, 3, 9));

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => console.log(json))