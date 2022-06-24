
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

let angkaGenap = () => {
    for(let i = 1; i <=10; i++){
        if(i % 2 == 1){
            console.log (i);
        }
    }
}

console.log(angkaGenap());

let angkaGanjil = () => {
    for(let i = 1; i <=10; i++){
        if(i % 2 == 0){
            console.log (i);
        }
    }
}

console.log(angkaGanjil());

for (let i = 1; i <= 10; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

