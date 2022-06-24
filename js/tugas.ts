interface School{
  lesson: string;
  grade: number;
}
class Attendance{
  lesson: string;
  grade: number;

  constructor (lesson: string, grade: number){
      this.lesson = lesson;
      this.grade = grade;
  }
}
class Mipa extends Attendance {
name: string

constructor(name: string, lesson: string, grade: number){
  super(lesson, grade)
  this.name = name;
}
}
let School = new Mipa('Dinda','Math', 9)
  console.log(School)

const user1 = { 
  uname:"Rian",age: 26,job: "Teacher"}; 
const user2 = { 
  uname:"Kayla",age: 29,job: "Dentist"}; 
const user3 = {
  uname: "Lina",age: 23,job: "Chef"};

let myArray = [ user1, user2, user3 ]
for(let index in myArray)
{
console.log(myArray[index]);
}
for(let i = 0; i < myArray.length; i++)
{
console.log(myArray[i]);
}
function segitiga(panjang: number) {
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


async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("Sucess!!");}, 3000);
  });
    console.log (await myPromise);
}

myDisplay();