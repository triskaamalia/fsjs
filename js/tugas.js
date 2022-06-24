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
function myDisplay() {
    return __awaiter(this, void 0, void 0, function* () {
        let myPromise = new Promise(function (resolve) {
            setTimeout(function () { resolve("Sucess!!"); }, 3000);
        });
        console.log(yield myPromise);
    });
}
myDisplay();
