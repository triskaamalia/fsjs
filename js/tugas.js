"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Attendance {
    constructor(lesson, grade) {
        this.lesson = lesson;
        this.grade = grade;
    }
}
class Mipa extends Attendance {
    constructor(name, lesson, grade) {
        super(lesson, grade);
        this.name = name;
    }
}
let School = new Mipa('Dinda', 'Math', 9);
console.log(School);
const user1 = {
    uname: "Rian", age: 26, job: "Teacher"
};
const user2 = {
    uname: "Kayla", age: 29, job: "Dentist"
};
const user3 = {
    uname: "Lina", age: 23, job: "Chef"
};
let myArray = [user1, user2, user3];
for (let index in myArray) {
    console.log(myArray[index]);
}
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
function segitiga(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(10));
let angkaGanjil = () => {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
};
console.log(angkaGanjil());
let angkaGenap = (range) => {
    for (let i = 1; i <= range; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
};
console.log(angkaGenap(10));
for (let i = 1; i <= 10; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
let n1 = 0;
let n2 = 1;
const fibonacciGenerator = (maxnum) => {
    for (let i = 1; i <= maxnum; i++) {
        console.log(n1);
        let next_num = n1 + n2;
        n1 = n2;
    }
    const generatePrime = (maxnum) => {
        for (let limit = 1; limit <= maxnum; limit++) {
            let a = false;
            for (let i = 2; i <= limit; i++) {
                if (limit % i === 0 && i !== limit) {
                    a = true;
                }
            }
            if (a === false) {
                console.log(limit);
            }
        }
    };
    function myDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            let myPromise = new Promise(function (resolve) {
                setTimeout(function () { resolve("Sucess!!"); }, 3000);
            });
            console.log(yield myPromise);
        });
    }
    myDisplay();
};
