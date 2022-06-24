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
class Exam {
    constructor(name, lesson, score) {
        this.name = name;
        this.lesson = lesson;
        this.score = score;
    }
}
let Student = new Exam('Diana', 'math', 85);
console.log(Student);
const delay = (ms) => new Promise((f) => setTimeout(f, ms));
const a = (f) => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(1000);
    f('Promise 1');
    yield delay(1000);
    f('Promise 2');
    yield delay(1000);
    f('Promise 3');
});
a((text) => console.log(text));
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
let user = (i) => {
    if (i <= 1) {
        console.log('admin');
    }
    else {
        console.log('client');
    }
};
console.log(user(2));
