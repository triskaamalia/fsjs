interface Student{
    name: string;
    lesson: string;
    score: number;
}
class Exam {
    name: string;
    lesson: string;
    score: number;

    constructor (name: string, lesson: string, score: number){
        this.name = name;
        this.lesson = lesson;
        this.score = score;
    }
}

let Student = new Exam('Diana', 'math', 85)

console.log(Student)

const delay = (ms: number) => new Promise((f: TimerHandler) => setTimeout(f, ms));
const a = async (f: Function) => {
  await delay(1000);
  f('Promise 1');
  await delay(1000);
  f('Promise 2');
  await delay(1000);
  f('Promise 3');
};
a((text: string) => console.log(text));


const luas = (p: number, r: number, s: number): number =>{
    let hasil = p*(r+s)
    return hasil
}
const selimut = (p: number, r: number, s: number): number =>{
    let hasil = p*r*s
    return hasil
}
const alas = (p: number, r: number): number =>{
    let hasil = p*(r*r)
    return hasil
}
const volume = (p: number, r: number, t: number): number =>{
    let hasil = 1/3*p*(r*r)*t
    return hasil
}

console.log(luas(3.14, 3, 10))
console.log(selimut(3.14, 3, 10))
console.log(alas(3.14, 3))
console.log(volume(3.14, 3, 9))

let user = (i: number) => {
    if(i <= 1){
        console.log ('admin');
    }
    else{
        console.log ('client');
    }
}

console.log(user(2));