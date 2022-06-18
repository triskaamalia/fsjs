class exam {
    name: string;
    lesson: string;
    score: number;

    constructor (name: string, lesson: string, score: number){
        this.name = name;
        this.lesson = lesson;
        this.score = score;
    }
}

let student = new exam('Diana', 'math', 85)

console.log(student)

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
